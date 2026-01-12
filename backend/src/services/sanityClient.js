import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config();

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  apiVersion: "2026-01-12",
  token: process.env.SANITY_API_TOKEN,
});

export async function uploadImage(imageFromForm) {
  try {
    const imageDataOnly = imageFromForm.replace(/^data:image\/\w+;base64,/, "");

    const imageBuffer = Buffer.from(imageDataOnly, "base64");

    const uploadedImage = await client.assets.upload("image", imageBuffer, {
      filename: `event-${Date.now()}.jpg`,
    });

    return uploadedImage;
  } catch (error) {
    console.error("Error uploading image to Sanity:", error);
    throw error;
  }
}

export async function createEvent(eventData) {
  if (
    !eventData.title ||
    !eventData.eventDateTime ||
    !eventData.location ||
    !eventData.hostName
  ) {
    throw new Error("Missing required fields");
  }

  if (eventData.price && eventData.price < 0) {
    throw new Error("Price must be positive");
  }

  try {
    let imageRef = null;

    if (eventData.eventImageFile) {
      const imageAsset = await uploadImage(eventData.eventImageFile);

      imageRef = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      };
    }

    const { eventImageFile, ...eventDataWithoutImage } = eventData;

    const result = await client.create({
      _type: "event",
      ...eventDataWithoutImage,
      image: imageRef,
    });
    return result;
  } catch (error) {
    console.error("Error creating event in Sanity:", error);
    throw error;
  }
}
