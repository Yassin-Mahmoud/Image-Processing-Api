# Image Processing Api
#### display and resize images with .jpg file extenstion

## Endpoints:

### **main endpoint**
#### http://localhost:3000/

### **image endpoint**

#### [ to display original image ]:
##### http://localhost:3000/image?filename=imagename

#### [ to resize and display image ]:
##### http://localhost:3000/image?filename=imagename&width=100&height=100
---> width and height must be a number more than 0 <---

### **Avilable images:**
##### * *encenadaport*
##### * *fjord*
##### * *icelandwaterfall*
##### * *santamonica*
##### * *palmtunnel*

## Scripts:
### --> npm run [script] <--
### [ dev ] : run the ts file with nodemon
### [ build ] : compile ts to js
### [ start ] : compile ts to js and run the js file
### [ lint ] :  identifying and reporting on patterns with eslint
### [ lint-fix ] : fix errors with eslint
### [ prettier ] : run prettier
### [ jasmine ] : run jasmine for testing 
### [ test ] : compile ts to js and run jasmine for testing
