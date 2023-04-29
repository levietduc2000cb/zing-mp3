import ImageCustom from "@/components/imageCustom";
import React from "react";

const FamousProgram = () => {
  return (
    <div className="text-white">
      <h2 className="pt-12 pb-5 text-xl font-bold capitalize">
        Chương trình nổi bật
      </h2>
      <div className="grid grid-cols-2 gap-x-7">
        <div
          style={{
            backgroundImage:
              "url(https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/0/c/1/90c1a3da3e6612bd51cc6d0a145f91d2.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="flex items-center overflow-hidden rounded-md"
        >
          <div
            style={{ backdropFilter: "blur(70px)" }}
            className="flex items-center w-full p-4 bg-black/30"
          >
            <div className="w-[120px] h-[120px] relative overflow-hidden rounded-md flex-shrink-0 mr-3">
              <ImageCustom
                src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/0/c/1/90c1a3da3e6612bd51cc6d0a145f91d2.jpg"
                alt="img"
              />
            </div>
            <div>
              <p className="text-xs font-medium text-[##feffff] truncate">
                XONE Radio
              </p>
              <h3 className="font-bold text-white truncate">XONE With Stars</h3>
              <p className="text-sm text-[##feffff] truncate-3">
                Talkshow 1 tiếng với các ca sĩ, nhạc sĩ, rapper, music producer.
                Hẹn hò cùng các nghệ sĩ trong nước: Tóc Tiên, Đức Phúc hay gặp
                gỡ độc quyền các nghệ sĩ Quốc tế: Alan Walker, Rita Ora…cùng
                XONE Radio. Khám phá và thưởng thức âm nhạc đa sắc màu. Phát
                trực tiếp lúc 18h00 thứ 6, phát lại lúc 19h00 Chủ nhật hàng tuần
                tại tab XONE Radio trên Zing MP3 và tần số FM 89MHz. XONE WITH
                STARS - Dating with Stars Đừng quên đón nghe bạn nhé!
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/6/d/7/f6d788fdf5d8ef5913ea2bc2e514a083.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="flex items-center overflow-hidden rounded-md"
        >
          <div
            style={{ backdropFilter: "blur(70px)" }}
            className="flex items-center w-full p-4 bg-black/30"
          >
            <div className="w-[120px] h-[120px] relative overflow-hidden rounded-lg flex-shrink-0 mr-3">
              <ImageCustom
                src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/6/d/7/f6d788fdf5d8ef5913ea2bc2e514a083.jpg"
                alt="img"
              />
            </div>
            <div>
              <p className="text-xs font-medium text-[##feffff] truncate">
                XONE Radio
              </p>
              <h3 className="mb-2 font-bold text-white truncate">
                XONE With Stars
              </h3>
              <p className="text-sm text-[##feffff] truncate-3">
                Talkshow 1 tiếng với các ca sĩ, nhạc sĩ, rapper, music producer.
                Hẹn hò cùng các nghệ sĩ trong nước: Tóc Tiên, Đức Phúc hay gặp
                gỡ độc quyền các nghệ sĩ Quốc tế: Alan Walker, Rita Ora…cùng
                XONE Radio. Khám phá và thưởng thức âm nhạc đa sắc màu. Phát
                trực tiếp lúc 18h00 thứ 6, phát lại lúc 19h00 Chủ nhật hàng tuần
                tại tab XONE Radio trên Zing MP3 và tần số FM 89MHz. XONE WITH
                STARS - Dating with Stars Đừng quên đón nghe bạn nhé!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamousProgram;
{
  /* <div className="w-[120px] h-[120px] relative overflow-hidden rounded-md">
            <ImageCustom
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/0/c/1/90c1a3da3e6612bd51cc6d0a145f91d2.jpg"
              alt="img"
            />
          </div>
          <div>1</div> */
}
