# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## HomePage.js

Hit to locate ImageToBase64  [Here](https://github.com/mbganesh/ImageToBase64WithReact/blob/master/src/componets/Home.js).

### Code

```
// funcation

 const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await base64Convertor(file);
    console.log(base64);
    setImage(base64);
  };

  const base64Convertor = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

// return


<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    uploadImage(e);
  }}
/>;

        
        
```
