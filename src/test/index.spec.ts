import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Testing the main page endpoint response", () => {
  it("Gives a welcome message", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      "<h2>Welcome to Yassin's 'Image Processing' Api</h2>"
    );
  });
});

describe("Testing the image endpoint response", () => {
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

  it("Returns 'Width or height is not valid' error when width or height is not valid or not a number", async () => {
    const response = await request.get(
      "/image?filename=fjord&width=500&height=test"
    );
    expect(response.status).toBe(405);
    expect(response.text).toBe(
      "<h3>Width or hight is not valide,</h3> Please enter valid width and height"
    );
  });
});

// describe("Testing image processing", () => {
//   it("", async () => {});
// });
