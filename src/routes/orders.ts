import fs from 'fs';
import { Router } from 'express';
import multer from 'multer';
import { getOrdersStatistics } from '../controllers/orders';

const router: Router = Router();
const upload = multer();

router.get('/:filename', (req, res) => {
  const { filename } = req.params;
  if (!fs.existsSync(`./output/${filename}`)) {
    res.status(404).send('File not found');
  }
  res.download(`./output/${filename}`);
});

router.post('/', upload.single('file'), async (req, res) => {
  const originalname = req.file?.originalname;
  if (!originalname) {
    res.status(403).send('CSV file is required');
  }

  const data = req.file.buffer.toString('utf8');
  const orders = data.split('\n');
  const { csv0, csv1 } = await getOrdersStatistics(orders);

  if (!fs.existsSync('output')) {
    fs.mkdirSync('output');
  }
  fs.writeFileSync(`./output/${`0_${originalname}`}`, csv0);
  fs.writeFileSync(`./output/${`1_${originalname}`}`, csv1);

  res.send({
    csv0,
    csv1,
  });
});

export default router;
