"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { getMemeData } from "@/redux/actions/MemeAction";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

// const DefaultImgUrl="/images/white.jpg";
const DefaultImage = {
  id: 1,
  url: "/images/white.jpg",
  width: "100",
  height: "100",
  box_count: 5,
  captions: 0,
};

const getMyMemes = (state) => {
  return {
    memeData: state?.meme?.memeData || [],
    isLoading: state?.meme.isLoading || false,
  };
};

export default function ImageListing() {
  const dispatch = useDispatch();
  const [editImage, setEditImage] = useState(DefaultImage);
  const { memeData = [], isLoading = [] } = useSelector((state) =>
    getMyMemes(state)
  );

  useEffect(() => {
    getMemes();
  }, []);

  const getMemes = () => {
    dispatch(getMemeData());
  };

  const updateImage = (item) => {
    setEditImage(item);
  };

  const handleBack=()=>{
    setEditImage(DefaultImage)
  }

  const matches = useMediaQuery("(min-width:900px)");

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <Grid container spacing={0}>
        {editImage && editImage.id == 1 ? (
          <Grid item xs={12}>
            <ImageList variant="masonry" cols={matches ? 5 : 3} gap={8}>
              {memeData && memeData.length
                ? memeData.map((item) => {
                    return (
                      <ImageListItem
                        onClick={() => updateImage(item)}
                        key={item.id}
                      >
                        <img
                          src={`${item.url}`}
                          srcSet={`${item.url}`}
                          alt={item.name}
                          loading="lazy"
                        />
                      </ImageListItem>
                    );
                  })
                : ""}
            </ImageList>
          </Grid>
        ) : (
          <>
           <Grid className="editor-section" item xs={12}>
           <Button onClick={()=>handleBack()} variant="contained">Back</Button>
           </Grid>
            <Grid className="editor-section first-row" item xs={12}>
              <div className="imageEditor-flex-box">
                <Button variant="contained">Upload</Button>
                <div className="canvas-area">
                  <img
                    src={editImage.url}
                    className="edting-image"
                    alt="Picture of the author"
                  />
                </div>
                {/* </Grid>
      <Grid className="first-row"  item xs={4}></Grid>
      <Grid className="first-row" item xs={4}> */}
                <Button variant="contained">Download</Button>
              </div>
            </Grid>
            <Grid className="editor-section second-row" item xs={12}>
            <div className="imageEditortools-flex-box">
              <FormControl  id="demo-simple-select1" fullWidth>
                <InputLabel id="demo-simple-select-label1">Canvas</InputLabel>
                <Select
                  labelId="demo-simple-select-label1"
                 
                  label="Age"
                >
                  <MenuItem value={916}>9:16</MenuItem>
                  <MenuItem value={43}>4:3</MenuItem>
                </Select>
              </FormControl>
            {/* </Grid>
            <Grid className="second-row" item xs={4}> */}
              <Button variant="contained">Add Text</Button>
            {/* </Grid>
            <Grid className="second-row" item xs={4}> */}
              <FormControl   id="demo-simple-select2" fullWidth>
                <InputLabel id="demo-simple-select-label2">
                  Text Layout
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label2"
                
                  label="Age"
                >
                  <MenuItem value={916}>9:16</MenuItem>
                  <MenuItem value={43}>4:3</MenuItem>
                </Select>
              </FormControl>
              </div>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
