import ItemList from "./components/itemList";
import NewReleased from "./components/newlyReleased";
import Slide from "./components/slide";
import { Item } from "@/models";
import SongRatings from "./components/songRatings";
import ZingChart from "./components/zingChart";
import ItemList2 from "@/components/itemList2";
import PartnerMusic from "./components/partnerMusic";

const MELODY: Item[] = [
  {
    id: 1,
    name: "Đi chơi xa cùng những giai điệu V-Pop quen thuộc",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/anh-am-nhac-de-thuong-04231-768x480.jpg",
  },
  {
    id: 2,
    name: "Lên xe và tạo nên những kỷ niệm tuyệt vời của tuổi trẻ",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/anh-cay-am-nhac-04582.jpg",
  },
  {
    id: 3,
    name: 'Âm nhạc "Mốc" đồng hành cùng bạn trên mọi cung đường',
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/anh-dep-ve-am-nhac-04688.jpg",
  },
  {
    id: 4,
    name: "Giai điệu đầy năng lượng không thể thiếu cho chuyến đi xa",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-am-nhac-07610.jpg",
  },
  {
    id: 5,
    name: "Gia đình, âm nhạc và những điều thú vị",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-am-nhac-bay-bong-05021.jpg",
  },
];

const CHILL: Item[] = [
  {
    id: 1,
    name: "Ở đây có những bản hit cực chill, vừa nghe vừa feel",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-am-nhac-co-dien-05414.jpg",
  },
  {
    id: 2,
    name: "Thả mình vào những giai điệu V-Pop nhẹ nhàng",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-am-nhac-don-gian-05742.jpg",
  },
  {
    id: 3,
    name: "X2 mượt mà khi các rapper lướt flow trên những bản R&B",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-am-nhac-hien-dai-05866.jpg",
  },
  {
    id: 4,
    name: "Giai điệu Guitar đem lại cảm giác yên bình nhất cho bạn",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-am-nhac-nhe-06196.jpg",
  },
  {
    id: 5,
    name: "Thanh âm Lofi quen mà lạ, lạ mà quen",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-am-nhac-vu-truong-07387.jpg",
  },
];

const POSITIVE_ENERGY: Item[] = [
  {
    id: 1,
    name: "Cảm hứng mỗi ngày từ những giai điệu V-Pop quen thuộc",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-cam-thu-am-nhac-08147-768x480.jpg",
  },
  {
    id: 2,
    name: "Hãy cứ yêu đi vì cuộc đời cho phép",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-background-am-nhac-07963.jpg",
  },
  {
    id: 3,
    name: "Âm nhạc nạp vitamin tích cực cho bạn mỗi ngày",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-dung-cu-am-nhac-08749-768x538.jpg",
  },
  {
    id: 4,
    name: "ở đây có những lựa chọn V-Pop làm bạn vui tươi không cần tưới",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-hay-ve-am-nhac-09188.jpg",
  },
  {
    id: 5,
    name: "Cứ vui lên vì những âu lo rồi sẽ qua thôi",
    imgUrl:
      "https://anhdepfree.com/wp-content/uploads/2021/04/hinh-anh-lang-nghe-am-nhac-09522-768x501.jpg",
  },
];

const TRENDING_SINGER: Item[] = [
  {
    id: 1,
    name: "Ở đây có những bản hit hay nhất của Ưng Hoàng Phúc",
    imgUrl: "https://toplist.vn/images/800px/ung-hoang-phuc-705.jpg",
  },
  {
    id: 2,
    name: "Không thể say trước âm nhạc mlem của Sỹ Luân",
    imgUrl: "https://toplist.vn/images/800px/sy-luan-707.jpg",
  },
  {
    id: 3,
    name: "Ưng quá, bộ sưu tập list của Mỹ Tâm",
    imgUrl: "https://toplist.vn/images/800px/my-tam-709.jpg",
  },
  {
    id: 4,
    name: '"Người ôm pháo hoa" và bộ sưu tập Hit của Đông Nhi',
    imgUrl: "https://toplist.vn/images/800px/dong-nhi-710.jpg",
  },
  {
    id: 5,
    name: "Những bản Hit hay nhất của Quang Vinh",
    imgUrl: "https://toplist.vn/images/800px/quang-vinh-708.jpg",
  },
];

const TOP_100: Item[] = [
  {
    id: 1,
    title: "Top 100 Bài Nhạc Trẻ Hay Và Sâu Lắng",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/9/5/4/09542fd83e019d4734587f836bc9bbc0.jpg",
    author: ["MONO", "Jack", "Phát Huy"],
  },
  {
    id: 2,
    title: "Top 100 Pop Âu Mỹ Hay Nhất",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/5/5/b/855bb71b9bc9a577ea6627df65a2adeb.jpg",
    author: ["Milley", "Sam Smit", "John"],
  },
  {
    id: 3,
    title: "Top 100 EDM",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg",
    author: ["Alan Walker", "K-398", "Hollow"],
  },
  {
    id: 4,
    title: "Top 100 Nhạc Trữ Tình Hay",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/7/8/3/7783eb20c347a1e5192c6d0c05ed325a.jpg",
    author: ["Mạnh Quỳnh", "Như Hoàng", "Tố Tâm"],
  },
  {
    id: 5,
    title: "Top 100 Nhạc Hàn Quốc Hay Và Sôi Động",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/d/7/c/dd7ce7d76a8b994d1ab04184c71f32f2.jpg",
    author: ["Lee", "TWICE", "Jimmy"],
  },
];

const ALBUM_HOT: Item[] = [
  {
    id: 1,
    title: "Chẳng Còn Chúng Ta",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/e/d/23edcd39c5326c14e867e6715701ff67.jpg",
    author: ["Đông Đặng"],
  },
  {
    id: 2,
    title: "Ngày Nào Đó",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/0/9/7/8097bd408ac6a75ffa91afb75f890ca1.jpg",
    author: ["Vô Trọng Chí", "BMZ"],
  },
  {
    id: 3,
    title: "Mật Ngọt",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/c/c/3/ecc35e9c9b47f288200e2ff439a29c65.jpg",
    author: ["Dũng Hoàng Phạm"],
  },
  {
    id: 4,
    title: "Giờ Em Khóc Nước Mắt Ai Rơi",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/1/c/3/71c3367b678207953a80a392d24ac651.jpg",
    author: ["Thiên Tú"],
  },
  {
    id: 5,
    title: "Không Em Thì Ai",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/d/4/3/cd431179d75b94e04437e9c75546da20.jpg",
    author: ["Trung Quân"],
  },
];

const Discovery = () => {
  return (
    <div>
      <div className="pt-8 pb-12">
        <Slide />
      </div>
      <div>
        <NewReleased />
      </div>
      <div>
        <ItemList title={"Giai Điệu Vi Vu"} items={MELODY} />
        <ItemList title={"Chill"} items={CHILL} />
        <ItemList title={"Năng Lượng Tích Cực"} items={POSITIVE_ENERGY} />
        <ItemList title={"Nghệ Sĩ Thịnh Hành"} items={TRENDING_SINGER} />
        <SongRatings />
      </div>
      <div>
        <ZingChart />
      </div>
      <div>
        <ItemList title={"Top 100"} items={TOP_100} />
        <ItemList title={"Album Hot"} items={ALBUM_HOT} />
        <ItemList2 />
      </div>
      <PartnerMusic />
    </div>
  );
};

export default Discovery;
