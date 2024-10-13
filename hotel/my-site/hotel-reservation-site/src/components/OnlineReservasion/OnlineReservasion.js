import React, { useEffect } from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchPannel from "../SearchPanel/SearchPanel";
import ShowRooms from "../ShowRooms/ShowRooms";
import DatePicker from "../DatePicker/DatePicker";
import "../../styles/main.scss";
import { useState } from "react";
import Space from "../../components/Space/Space";
import Error from "../Error/Error";
import ShowCalcute from "../ShowCalcute/ShowCalcute";

const OnlineReservasion = () => {
  const [startReservDate, setStartReservDate] = useState();
  const [endReservDate, setEndReservDate] = useState();
  const[myError,setMyError]=useState("");




  const handleSearchRoomsClick = (startDate, endDate,error) => {
    setStartReservDate(startDate);
    setEndReservDate(endDate);
    setMyError(error)
  };







  return (
    <div className="online-reserve">
      <TopMenu />
      <Header />
      <Space />
      <Space/>
      <Space/>
      <Space/>
      <div className="online-reserve__container container-custom">
<div className="online-reserve__container--right">

      <DatePicker handleSearchRoomsClick={handleSearchRoomsClick}></DatePicker>
      {startReservDate && endReservDate ? myError?null:
        
          <ShowRooms
            startReservDate={startReservDate}
            endReservDate={endReservDate}
          ></ShowRooms>
        
     :null}
</div>


      <ShowCalcute startReservDate={startReservDate} endReservDate={endReservDate}></ShowCalcute>


      </div>
      <Space />
      

      <Footer />
    </div>
  );
};

export default OnlineReservasion;
