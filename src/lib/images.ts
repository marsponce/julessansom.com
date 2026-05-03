import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

export async function getImageData(imagePath: string) {
  const filename = path.basename(imagePath);
  const absolutePath = path.join(
    process.cwd(),
    'content/images/uploads',
    filename
  );
  const rawBuffer = fs.readFileSync(absolutePath);

  // Apply and strip EXIF rotation so dimensions and blur reflect what the browser renders
  const buffer = await sharp(rawBuffer).rotate().toBuffer();

  const { width, height } = await sharp(buffer).metadata();

  const blurBuffer = await sharp(buffer).resize(8).blur().toBuffer();

  const blurDataURL = `data:image/webp;base64,${blurBuffer.toString('base64')}`;

  const {
    default: { src },
  } = await import(`@content/images/uploads/${filename}`);

  return { src, blurDataURL, width: width!, height: height! };
}
