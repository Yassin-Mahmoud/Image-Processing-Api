# Image Processing Api

#### display and resize images with .jpg file extension

## Endpoints:

### - **Main endpoint**

#### http://localhost:3000/

### - **Image endpoint**

#### [ to display original image ]:

##### http://localhost:3000/image?filename=imagename

#### [ to resize and display image ]:

##### http://localhost:3000/image?filename=imagename&width=100&height=100

---> width and height must be a number more than 0 <---

### - **Available images:**

##### \* _encenadaport_

##### \* _fjord_

##### \* _icelandwaterfall_

##### \* _santamonica_

##### \* _palmtunnel_

## Scripts:

#### --> npm run scriptname <--

#### [ dev ] : run the ts file with nodemon

#### [ build ] : compile ts to js

#### [ start ] : compile ts to js and run the js file

#### [ lint ] : identifying and reporting on patterns with eslint

#### [ lint-fix ] : fix errors with eslint

#### [ prettier ] : run prettier

#### [ jasmine ] : run jasmine for testing

#### [ test ] : compile ts to js and run jasmine for testing

## Notes:

##### \* you can display the image without resizing by typing only filename

##### \* if you want to resize an image you have to enter filename and both width and height

##### \* images only with .jpg extension will work
