import { Router } from 'express';
import multer from 'multer';
import { analyzeImage } from '../visionService'; // sends the image to your ML API

const router = Router();

// Set up multer to use memory storage (stores the uploaded file in memory as a Buffer)
const upload = multer({ storage: multer.memoryStorage() });

// POST /api/analyze
// This route accepts an image file, processes it, and returns the analysis result
router.post('/', upload.single('image'), async (req, res): Promise<void> => {
  // If no file was uploaded, return a 400 error
  if (!req.file) {
    res.status(400).json({ error: 'No image provided' });
    return;
  }

  try {
    // Send the image buffer to the vision analysis function (Google Vision)
    const results = await analyzeImage(req.file.buffer);

    // Respond with the results
    res.json(results);
    return;
  } catch (err) {
    // Log error and respond with 500
    console.error(err);
    res.status(500).json({ error: 'Failed to analyze image' });
    return;
  }
});

export default router;
