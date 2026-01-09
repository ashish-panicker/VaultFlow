import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { setupSecurity } from './middleware/security';

dotenv.config();

const app = express();
app.use(express.json());

// Apply Security
setupSecurity(app);

// Connect to Database
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/vaultflow';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to Secure Vault DB'))
  .catch((err) => console.error('DB Connection Error:', err));

app.get('/health', (req, res) => res.status(200).json({ status: 'UP' }));

app.listen(PORT, () => {
  console.log(`VaultFlow Backend running on port ${PORT}`);
});

export default app;
