import "./headline.css";

function Headline() {
    return (
        <section className="headline-section">
            <div className="headline-container">
                <h4 className="headline-pre-title animate-fade-in">Welcome to the</h4>
                <h1 className="headline-title animate-slide-up">
                    Department of<br />
                    <span className="highlight-text">Engineering & Technological Studies</span>
                </h1>
                <h4 className="headline-subtitle animate-fade-in">University of Kalyani</h4>
        
            </div>
        </section>
    );
}

export default Headline;