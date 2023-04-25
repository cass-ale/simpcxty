import React from "react";

function Music() {
    return (
        <div className="music" id="music">
            <section className="players">
            <iframe title="All I Wanted" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/5Et9tEPKeKNPvTjMa7ARly?utm_source=generator&theme=0" width="500" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            <iframe title="B 2.0" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/7MGyNQLnIplRU7BXA4YfOV?utm_source=generator&theme=0" width="500" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            <iframe title="SUN" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/5fsaU908MBM4NE93iXj8Tv?utm_source=generator&theme=0" width="500" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            </section>
        </div>
    )
}

export default Music;