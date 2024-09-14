/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Avatar, Button, Dialog, DialogTitle, ListItem, Skeleton, Stack, Typography, } from "@mui/material";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAsyncMutation, useErrors } from "../../hooks/hook";
import { useAcceptFriendRequestMutation, useGetNotificationsQuery } from "../../redux/api/api";
import { setIsNotification } from "../../redux/reducers/misc";



const Notification = () => {
  const dispatch = useDispatch();
  const {isNotification} = useSelector((state)=> state.misc);
  const {isLoading,data,error,isError} = useGetNotificationsQuery();

  const [acceptRequest] = useAsyncMutation(useAcceptFriendRequestMutation);

  const friendRequestHandler= async ({_id,accept}) => {
    dispatch(setIsNotification(false));
    await acceptRequest("Accepting...", {requestId: _id,accept,});
    // try {
    //   const res = await acceptRequest({ requestId: _id,accept,});
    //   //console.log(res);
    //   if(res.data?.success) {
    //     console.log("Use Socket here");
    //     toast.success(res.data.message);
    //   } else {
    //     console.log(res.error.data.message);
    //     toast.error(res.data?.error || "Something went wrong");
    //   }
    // } catch (error) {
    //   toast.error("Something went wrong");
    //   console.log(error);
    // }
  };
  
  useErrors([{error,isError}]);

  const closeHandler = () => dispatch(setIsNotification(false));

  return (
    <Dialog open={isNotification} onClose={closeHandler}>
      <Stack p={{xs: "1rem", sm: "2rem"}} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {isLoading ? (<Skeleton />) : (
           <>
            {data?.allRequests.length >0 ? (
             data?.allRequests?.map(({sender, _id}) => (
            <NotificationItem 
              key={_id}
              sender={sender}
              _id={_id}
              handler={friendRequestHandler}
            />
          ))
        ): (
          <Typography textAlign={"center"}>No new Notifications</Typography>
        )}
           </>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={avatar}/>

        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} sent you a friend request.`}
        </Typography>

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});
export default Notification;