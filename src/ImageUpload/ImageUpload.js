import ImageUploading from "react-images-uploading";
import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// { ImageUploadingPropsType, ImageListType, ImageType } is type for typescript

const maxNumber = 10;
const maxMbFileSize = 5 * 1024 * 1024; // 5Mb

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '300px',
    maxHeight: '200px'
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    flexWrap: 'wrap'
  },
  button: {
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  imageButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
}));

export default function ImageUpload() {
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

        <div className={classes.imageContainer}>
          <Button startIcon={<CloudUploadIcon />}
            className={classes.button} variant="outlined" color="primary" onClick={onImageUpload}>Upload images</Button>
          <Button className={classes.button} variant="outlined" color="secondary" onClick={onImageRemoveAll}>Remove all images</Button>

          {imageList.map((image) => (
            <div key={image.key} >
              <img src={image.dataURL} className={classes.image} />
              <div className="action">
                <Button color="primary" variant="outlined" size="small" className={classes.imageButton}
                  onClick={image.onUpdate}>Keisti</Button>
                <Button color="secondary" variant="outlined" size="small" className={classes.imageButton} startIcon={<DeleteIcon />} onClick={image.onRemove}>Pašalinti</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
}
