import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            <strong>* 지하철 이용시</strong>
            <br />. 지하철 2호선 이대역 4번출구 직진
            <br />→ 이대역 정류장에서 버스 승차(742, 7017)
            <br />→ <b>이대부중</b> 하차
            <br />. 독립문역(3호선) 4번 출구
            <br />→ 사거리에서 우회전
            <br />→ 극동아파트 정류장에서 버스 승차
            <br />&nbsp;&nbsp;&nbsp;&nbsp;(470, 610, 750(A,B), 7737)
            <br />→ <b>이대후문</b> 하차
            <br />. 경복궁역(3호선) 1번 출구
            <br />→ 100m 직진
            <br />→ 272, 606 탑승
            <br />→ <b>이대부중</b> 하차
            <br />
            <br />
            <b>* 버스 이용 시</b>
            <br />
            - 간선(파랑): 272, 470, 601, 606, 672, 673,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;700, 710, 742, 750(A,B)
            <br />
            - 지선(초록): 6714, 7017, 7024, 7737번
            <br />
            - 광역/직행: G7111, M7111, M7119, M7154번
            <br />
            <b> 이대후문</b> 또는 <b>이대부중</b> 하차

          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>연세동문회관</b> 또는 <b>연세대학교동문회관</b>
            <br />
            연세대학교 정문 방향에서 오시는 분은 금화터널 고가도로 밑에서 유턴하시면 됩니다.
            <br />
            <b>연세동문회관 입·출차 시 2시간 무료 주차</b>
            <br />
          </div>
          <div />
          <div className="content">
            <b>
              ※ 꼭 연세동문회관으로 입·출차해야만 무료주차가 적용됩니다.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
