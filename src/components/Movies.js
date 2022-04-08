import { Box, Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";

const Movies = () => {
  return (
    <>
      <h4 style={{ marginLeft: "35px" }}>Recommended For You</h4>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "80px",
          marginRight: "90px",
          overflow: "hidden",
        }}
      >

        <Card
          elevation={12}
          sx={{ maxWidth: 345 }}
          style={{
            backgroundColor: "transparent",
            border: "1px solid White",
            borderRadius: "15px",
            margin: "20px",
            width: "150px",
            height: "140px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5211/1165211-v-7ac0f6d12a5d"}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345 }}
          style={{
            backgroundColor: "transparent",
            border: "1px solid White",
            borderRadius: "15px",
            margin: "20px",
            width: "150px",
            height: "140px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/608/1160608-v-8680160dd6b2"}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345 }}
          style={{
            backgroundColor: "transparent",
            border: "1px solid White",
            borderRadius: "15px",
            margin: "20px",
            width: "150px",
            height: "140px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1608/1161608-v-8fdb21cf9c1c"}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345 }}
          style={{
            backgroundColor: "transparent",
            border: "1px solid White",
            borderRadius: "15px",
            margin: "20px",
            width: "150px",
            height: "140px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2730/1122730-v-1d6aabd972c3"}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345 }}
          style={{
            backgroundColor: "transparent",
            border: "1px solid White",
            borderRadius: "15px",
            margin: "20px",
            width: "150px",
            height: "140px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1919/1111919-v-f73a6f4d8b98"}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345 }}
          style={{
            backgroundColor: "transparent",
            border: "1px solid White",
            borderRadius: "15px",
            margin: "20px",
            width: "150px",
            height: "140px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1837/1101837-v-6d58f6a29934"}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345 }}
          style={{
            backgroundColor: "transparent",
            border: "1px solid White",
            borderRadius: "15px",
            margin: "20px",
            width: "150px",
            height: "140px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235"}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345 }}
          style={{
            backgroundColor: "transparent",
            border: "1px solid White",
            borderRadius: "15px",
            margin: "20px",
            width: "150px",
            height: "140px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5883/1095883-v-c0fa911c0098"}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>

        <Card
          elevation={12}
          sx={{ maxWidth: 345 }}
          style={{
            backgroundColor: "transparent",
            border: "1px solid White",
            borderRadius: "15px",
            margin: "20px",
            width: "150px",
            height: "140px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795"}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card
          elevation={12}
          sx={{ maxWidth: 345 }}
          style={{
            backgroundColor: "transparent",
            border: "1px solid White",
            borderRadius: "15px",
            margin: "20px",
            width: "150px",
            height: "140px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4361/1094361-v-0fcfbde1cd2f"}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};

export default Movies;
