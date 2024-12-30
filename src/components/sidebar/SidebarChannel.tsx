// import React from 'react'
import { DocumentData } from "firebase/firestore";
import "./SidebarChannel.scss";
import { useAppDispatch } from "../../app/hooks";
import { setChannelInfo } from "../../features/channelSlice";

type Props = {
  id: string;
  channel: DocumentData;
};

function SidebarChannel(props: Props) {
  const { id, channel } = props;
  const dispatch = useAppDispatch();
  console.log(channel.channel);

  return (
    <div className="SidebarChannel" onClick={() => dispatch(setChannelInfo({
      channelId: id,
      channelName : channel.channel.channelName,
    }))}>
      <h4>
        <span className="sidebarChannelHash" key={id}>
          #
        </span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
