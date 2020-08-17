import ImageUploading from "react-images-uploading";
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// { ImageUploadingPropsType, ImageListType, ImageType } is type for typescript

const maxNumber = 10;
const maxMbFileSize = 5 * 1024 * 1024; // 5Mb

const useStyles = makeStyles({
    image:{
        maxWidth:'200px'
    },
    imageContainer:{
      display:'flex',
      flexDirection:'row',
      width:'80%'
    },
  });

export default function ImageUpload()  {
  const onChange = (imageList) => {
    // data for submit
    console.log(imageList);
  };
  const onError = (errors, files) => {
    console.log(errors, files);
  };
  const classes = useStyles();

    return (
      <ImageUploading
        onChange={onChange}
        maxNumber={maxNumber}
        multiple
        maxFileSize={maxMbFileSize}
        acceptType={["jpg", "png"]}
        onError={onError}
      >
        {({ imageList, onImageUpload, onImageRemoveAll }) => (
          // write your building UI
          <div>
            <button onClick={onImageUpload}>Upload images</button>
            <button onClick={onImageRemoveAll}>Remove all images</button>

            {imageList.map((image) => (
              <div key={image.key} className={classes.imageContainer}>
                <img src={image.dataURL} className={classes.image} />
                <div className="action">
                    <button onClick={image.onUpdate}>Update</button>
                    <button onClick={image.onRemove}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    );
  }
