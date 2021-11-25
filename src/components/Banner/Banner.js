const img = 'https://monnampo.sirv.com/Images/Asset%201.svg?fbclid=IwAR2R6gtJhUiaBHe2aCafPo5Ow6mhtmv2tm77yFMpitETYefuVr2WSghbhgg'
const Banner = () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={img} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    );
};

export default Banner;