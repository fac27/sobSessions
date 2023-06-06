const convertToEmbedURL=(url) => {
    const embedURL = url.replace("/track/", "/embed/track/").replace("?si=", "?utm_source=generator");
    return embedURL;
}

export default function iframe(url){
    const embedURL = convertToEmbedURL(url);
    return /*html*/`
    <iframe style="border-radius:12px" src=${embedURL} 
        width="50%" height="80" frameBorder="0" allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
        </iframe>
    `
}