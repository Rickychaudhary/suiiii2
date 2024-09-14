/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Avatar, Box, Typography } from "@mui/material";
import { memo } from "react";
import { lightBlue } from "../../constants/color";
import moment from "moment";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";
import { motion } from "framer-motion";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  //console.log("content : ",content);
  //console.log("sender : ",sender);

  // useEffect(() => {
  //   console.log("Message sender:", sender);
  //   console.log("Current user:", user);
  //   console.log("Sender ID:", sender?.id || sender?._id, "User ID:", user?._id);
  // }, [sender, user]);

  // Ensure we handle both id and _id cases
  const sameSender = sender?.id === user?._id || sender?._id === user?._id;

  // useEffect(() => {
  //   console.log("sameSender:", sameSender);
  // }, [sameSender]);

  const timeAgo = moment(createdAt).fromNow();

  return (
    <motion.div
      initial={{ opacity: 0, x: sameSender ? "100%" : "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      whileInView={{opacity: 1, x: 0 }}
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: sameSender ? "#DCF8C6" : "#FFFFFF", // Light green for sender, white for receiver
        color: "black",
        borderRadius: "10px",
        padding: "0.5rem",
        width: "fit-content",
        maxWidth: "60%", // Ensure messages don't take up too much space
        display: "flex",
        flexDirection: "column",
        alignItems: sameSender ? "flex-end" : "flex-start",
        marginBottom: "0.5rem",
      }}
    >
      <Box
        display="flex"
        flexDirection={sameSender ? "row-reverse" : "row"}
        alignItems="center"
        mb={1}
      >
        <Avatar src={sender?.avatar?.url} />
        {!sameSender && (
          <Typography color={lightBlue} fontWeight={"600"} variant="caption" ml={1}>
            {sender.name}
          </Typography>
        )}
      </Box>

      {content && (
        <Typography
          style={{
            textAlign: sameSender ? "right" : "left",
            alignSelf: sameSender ? "flex-end" : "flex-start"
          }}
        >
          {content}
        </Typography>
      )}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box key={index} mt={1} style={{ alignSelf: sameSender ? "flex-end" : "flex-start" }}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      <Typography
        variant="caption"
        color={"text.secondary"}
        style={{ alignSelf: sameSender ? "flex-end" : "flex-start" }}
      >
        {timeAgo}
      </Typography>
    </motion.div>
  );
};

export default memo(MessageComponent);
