import { Avatar, AvatarGroup, Box, Stack } from "@mui/material"
import { transformImage } from "../../lib/features"

// eslint-disable-next-line react/prop-types
const AvatarCard = ({avatar=[],max=4}) => {
  return (
    <Stack direction={"row"} height={"3rem"}>
        <AvatarGroup max={max} sx={{position: "relative"}}>
            <Box width={"5rem"} height="3rem">
                {avatar.map((i,index) =>(
                    <Avatar 
                      key={Math.random()* 100}
                      src={transformImage(i)}
                      alt={`Avatar ${index}`}
                      sx={{
                        width:"3rem",
                        height:"3rem",
                        border: "2px solid white",
                        position: "absolute",
                        left: {
                            xs: `${0.5+index}rem`,
                            sm: `${index}rem`,
                        }, 
                      }}
                    />  
                ))}
            </Box>
        </AvatarGroup>
    </Stack>
  )
}

export default AvatarCard