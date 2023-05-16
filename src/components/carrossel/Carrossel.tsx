// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
import { Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://static01.rp-luxury.com/15187-thickbox_default/kenzo-flower-by-kenzo-labsolue-eau-de-parfum.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://tramp.com.br/wp-content/uploads/2020/10/lancome_idole_100ml_2.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://www.theperfumeshop.com/elab/ecomm/Puig/2022/Fame/1.jpg" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel;