import supertest from "supertest";
import fs from "fs-extra";
import app from "../index";
import imageProcessing from "../utilities/imageProcessing";
import path from "path";

const request = supertest(app);

describe("Testing the main route endpoint response", () => {
  it("response status: 200, display welcome page", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});

describe("Testing the image route endpoint response", () => {
  it("Returns the resized image without errors if all parameters are set", async () => {
    const response = await request.get(
      "/image?filename=fjord&width=200&height=200"
    );
    expect(response.status).toBe(200);
  });

  it("Returns 'image not found (404)' error when no parameters are set", async () => {
    const response = await request.get("/image");
    expect(response.status).toBe(404);
    expect(response.text).toBe(
      "<h3>Image not found,</h3> please check image name and try again"
    );
  });

  it("Returns 'image not found' error when the filename is not valid", async () => {
    const response = await request.get("/image?filename=test");
    expect(response.status).toBe(404);
    expect(response.text).toBe(
      "<h3>Image not found,</h3> please check image name and try again"
    );
  });

  it("Returns 'Width or height is not valid' error when width or height is not valid", async () => {
    const response = await request.get(
      "/image?filename=fjord&width=500&height=test"
    );
    expect(response.status).toBe(405);
    expect(response.text).toBe(
      "<h3>Width or hight is not valide,</h3> Please enter valid width and height"
    );
  });

  it("Displays the image without resizing", async () => {
    const response = await request.get("/image?filename=fjord");
    expect(response.status).toBe(200);
  });

  it("Resizes the image without any errors", async () => {
    const response = await request.get(
      "/image?filename=fjord&width=400&height=400"
    );
    expect(response.status).toBe(200);
    expect(
      !fs.ensureFile("../../assets/resized_images/fjord-400-400.jpg")
    ).toBeFalse();
  });
});

describe("Testing image processing", async () => {
  const myImage = path.join(
    __dirname,
    "../",
    "../",
    "/assets",
    "/images",
    "/fjord.jpg"
  );
  const width = 400;
  const height = 400;

  it("create folder for resized images if not exists", async () => {
    expect(fs.ensureDir("../../assets/resized_images"));
  });

  it("The processing function works without errors", () => {
    expect(async () => {
      await await imageProcessing(myImage, width, height);
    }).not.toThrow();
  });
});
