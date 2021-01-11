import {
  VideoTileGrid,
  useMeetingManager,
  CameraSelection,
  QualitySelection,
  MicSelection,
  SpeakerSelection,
  useLocalVideo,
  useContentShareControls,
  ControlBar,
  ControlBarButton,
  Microphone,
  Camera,
  Dialer,
  Phone,
  Sound,
  Laptop,
  MeetingProvider,
} from 'amazon-chime-sdk-component-library-react';
import {
  CButton,
  CContainer,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
} from '@coreui/react';

import React from 'react';
import axios from 'axios';
import config from '../../../config';

const MyApp = () => {
  const meetingManager = useMeetingManager();
  // let currentAttendeeId = '';
  // let currentMettingId = '';
  const [currentAttendeeId, setCurrentAttendeeId] = React.useState();
  const [currentMettingId, setCurrentMettingId] = React.useState();
  const [mettingsId, setMettingsID] = React.useState();
  const [mettingsName, setMettingsName] = React.useState();
  const { toggleVideo } = useLocalVideo();
  const { toggleContentShare } = useContentShareControls();

  const sendJoinRequest = async (joinData) => {
    // Use the join API to create a meeting session
    await meetingManager.join(joinData);

    // At this point you can let users setup their devices, or start the session immediately
    await meetingManager.start();
  };

  const sendEndRequest = async (joinData) => {
    // Use the join API to create a meeting session
    // await meetingManager.join(joinData);

    // At this point you can let users setup their devices, or start the session immediately
    await meetingManager.leave();
  };

  // const handleChange = async (event) => {
  //     console.log(event.target.value);
  // }
  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //   const data = await response.json();
    const requestsBody = { meeting_id: mettingsId };
    await axios.post(`${config.rest.joinMeeting()}`, requestsBody).then((res) => {
      const responseData = res.data;
      if (responseData.code === 200 && responseData.message.id === 102) {
        console.log(responseData);
        const joinData = {
          meetingInfo: responseData.data.JoinInfo.Meeting,
          attendeeInfo: responseData.data.JoinInfo.Attendee,
        };
        setCurrentAttendeeId(responseData.data.JoinInfo.Attendee.AttendeeId);
        setCurrentMettingId(responseData.data.JoinInfo.Meeting.MeetingId);
        sendJoinRequest(joinData);
      }
    });
  };

  const createMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //   const data = await response.json();
    const requestsBody = { external_id: mettingsName, region: 'us-east-1' };
    await axios.post(`${config.rest.createMeeting()}`, requestsBody).then((res) => {
      const responseData = res.data;
      if (responseData.code === 200 && responseData.message.id === 102) {
        console.log(responseData);
        const joinData = {
          meetingInfo: responseData.data.JoinInfo.Meeting,
          attendeeInfo: responseData.data.JoinInfo.Attendee,
        };
        setCurrentAttendeeId(responseData.data.JoinInfo.Attendee.AttendeeId);
        setCurrentMettingId(responseData.data.JoinInfo.Meeting.MeetingId);
        sendJoinRequest(joinData);
      }
    });
  };

  const endMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //   const data = await response.json();
    await axios.delete(`${config.rest.endMetting()}?meeting_id=${currentMettingId}`).then((res) => {
      const responseData = res.data;
      if (responseData.code === 200 && responseData.message.id === 107) {
        setCurrentAttendeeId('');
        setCurrentMettingId('');
        sendEndRequest();
      }
    });
  };

  const leaveMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //   const data = await response.json();
    const requestsBody = { meeting_id: currentMettingId, attendee_id: currentAttendeeId };
    await axios.post(`${config.rest.leaveMetting()}`, requestsBody).then((res) => {
      // const responseData = res.data;
      // if (responseData.code === 200 && responseData.message.id === 107) {

      // }
      setCurrentAttendeeId('');
      setCurrentMettingId('');
      sendEndRequest();
    });
  };

  const [muted, setMuted] = React.useState(false);
  const [cameraActive, setCameraActive] = React.useState(false);

  const microphoneButtonProps = {
    icon: muted ? <Microphone muted /> : <Microphone />,
    onClick: () => setMuted(!muted),
    label: 'Mute',
  };

  const cameraButtonProps = {
    icon: cameraActive ? <Camera /> : <Camera disabled />,
    popOver: [
      {
        onClick: () => console.log('camera popover option 1'),
        children: <span>Some option text</span>,
      },
      {
        onClick: () => console.log('camera popover option 2'),
        children: <span>More option text</span>,
      },
    ],
    onClick: () => setCameraActive(!cameraActive),
    label: 'Camera',
  };

  const dialButtonProps = {
    icon: <Dialer />,
    onClick: () => console.log('Toggle dial pad'),
    label: 'Dial',
  };

  const hangUpButtonProps = {
    icon: <Phone />,
    onClick: () => leaveMeeting(),
    label: 'End',
  };

  const volumeButtonProps = {
    icon: <Sound />,
    onClick: () => toggleVideo(),
    popOver: [
      {
        onClick: () => console.log('volume popover option 1'),
        children: <span>Some option text</span>,
      },
      {
        onClick: () => console.log('volume popover option 2'),
        children: <span>More option text</span>,
      },
    ],
    label: 'Volume',
  };

  const laptopButtonProps = {
    icon: <Laptop />,
    onClick: () => toggleContentShare(),
    label: 'Screen',
  };

  return (
    <>
      <VideoTileGrid />
      <CContainer>
        <CRow>
          <CCol className="text-center">
            <MeetingProvider>
              <ControlBar showLabels layout="undocked-horizontal" css="margin: 0 auto">
                <ControlBarButton {...microphoneButtonProps} />
                <ControlBarButton {...volumeButtonProps} />
                <ControlBarButton {...cameraButtonProps} />
                <ControlBarButton {...dialButtonProps} />
                <ControlBarButton {...laptopButtonProps} />
                <ControlBarButton {...hangUpButtonProps} />
              </ControlBar>
            </MeetingProvider>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg="12" className="py-3">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-email">Mettings ID</CLabel>
                <CInput
                  type="text"
                  id="nf-email"
                  name="nf-email"
                  placeholder="Enter Mettings ID.."
                  onChange={(value) => setMettingsID(value.target.value)}
                />
                <CFormText className="help-block">
                  Meetings ID is required when you joining a meeting
                </CFormText>
                <CButton
                  key="success-lg"
                  color="success"
                  size="sm"
                  className="m-2 center"
                  onClick={joinMeeting}
                >
                  Join mettings
                </CButton>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-email">Mettings Name</CLabel>
                <CInput
                  type="text"
                  id="nf-mettings-name"
                  name="nf-mettings-name"
                  placeholder="Enter Mettings Name.."
                  onChange={(value) => setMettingsName(value.target.value)}
                />
                <CFormText className="help-block">
                  Meetings name is required when you create a meetings
                </CFormText>
                <CButton
                  key="success-create-lg"
                  color="success"
                  size="sm"
                  className="m-2 center"
                  onClick={createMeeting}
                >
                  Create a metting
                </CButton>
              </CFormGroup>
            </CForm>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg="6" className="py-3">
            <CameraSelection />
            <QualitySelection />
          </CCol>
          <CCol lg="6" className="py-3">
            <MicSelection />
            <SpeakerSelection />
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <span>Current mettings ID: {currentMettingId}</span>
          </CCol>
          <CCol>
            <span>Current attendee ID: {currentAttendeeId}</span>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg="12" className="py-3">
            <CButton
              key="success-toggle-lg"
              color="success"
              size="lg"
              className="m-2 center"
              onClick={toggleVideo}
            >
              Toggle video
            </CButton>
            <CButton
              key="success-toggle-content-share-lg"
              color="success"
              size="lg"
              className="m-2 center"
              onClick={toggleContentShare}
            >
              Toggle content share
            </CButton>
            <CButton
              key="success-toggle-leave-lg"
              color="warning"
              size="lg"
              className="m-2 center"
              onClick={leaveMeeting}
            >
              Leave Mettings
            </CButton>
            <CButton
              key="error-toggle-end-lg"
              color="danger"
              size="lg"
              className="m-2 center"
              onClick={endMeeting}
            >
              End Mettings
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default MyApp; // Don’t forget to use export default!
