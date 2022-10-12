import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material"
export const MuiCard = () => {
  return (
    <>
      <Box sx={{ maxWidth: 345 }}>
        <Card>
          <CardMedia
            component="img"
            height="140px"
            image="https://source.unsplash.com/random"
            alt="random"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              aspernatur a illo rem, ipsum autem eius, hic provident
              exercitationem quam sunt mollitia voluptates sed magnam. Aliquid
              assumenda harum et quis?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Share
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}
