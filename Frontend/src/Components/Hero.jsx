import "./hero.css"; // Custom CSS for animation

function Hero() {
    return (
        <section className="container-fluid bg-image-card min-vh-100 d-flex align-items-center">
            <div className="container fade-in"  style={{width: "50%"}}>
                <div className="Pagecard shadow-lg rounded-5 overflow-hidden">
                    {/* Left Part */}
                    <div className="leftPart d-flex align-items-center justify-content-center p-4">
                        <div>
                            <h1 className="text-center fw-bold mb-3 text-dark">About Us</h1>
                            <p className="text-center text-dark">Department of Engineering & Technology Studies</p>
                        </div>
                    </div>

                    {/* Right Part */}
                    <div className="rightPart p-4 shadow-lg" >
                        <p className="mb-0 text-dark">
                            <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam assumenda animi hic excepturi tenetur est fugit quidem, aliquid officia corporis id voluptas omnis molestias autem similique dicta? Ratione, iste facilis perspiciatis dolorum reprehenderit ipsum non esse voluptatum rem molestias voluptates veritatis et mollitia consectetur velit eaque, dignissimos, ut quod. Necessitatibus aliquid at optio dolorem aperiam velit earum itaque, voluptatem dolores labore alias? Possimus architecto qui velit ipsum nesciunt rem, corrupti necessitatibus odit autem vero itaque illo excepturi dolorem? Odit perspiciatis sequi ratione. Dicta explicabo quo, quaerat commodi nobis quasi magnam velit minus provident molestias ut excepturi quod at illo quae?</strong>   
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;



