// import React from 'react'
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel.tsx";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { auth, db } from "../../firebase.ts";
import { useAppSelector } from "../../app/hooks.ts";
import useCollection from "../../hooks/useCollection.tsx";
import { addDoc, collection } from "firebase/firestore";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  const { documents: channels } = useCollection("channels");

  const addChannel = async () => {
    let channelName: string | null = prompt("新しいチャンネルネームを追加");

    if (channelName) {
      await addDoc(collection(db, "channels"), {
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      {/* {sidebarLeft} */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="src/assets/react.svg" alt="" />
        </div>
        <div className="serverIcon">
          <img src="src/assets/react.svg" alt="" />
        </div>
      </div>
      {/* {sidebarRight} */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discode</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>チャットチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" onClick={() => addChannel()} />
          </div>
          {/* sidebarChannel */}
          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidebarChannel
                channel={channel}
                id={channel.id}
                key={channel.id}
              />
            ))}
          </div>
          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>
            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
