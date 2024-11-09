// import one from "../assets/images/1.png";
// import two from "../assets/images/2.png";
// import three from "../assets/images/3.png";
// import four from "../assets/images/4.png";
// import five from "../assets/images/5.png";
// import six from "../assets/images/6.png";
// import seven from "../assets/images/7.png";
// import eight from "../assets/images/8.png";
// import nine from "../assets/images/9.png";
// import ten from "../assets/images/10.png";
// import eleven from "../assets/images/11.png";
// import twelve from "../assets/images/12.png";

// const animaltitles = ["Bear Cub", "Deer", "Bull", "Goat", "Donkey", "Lamb","Monkey", "Lion and Cub", "Elephants", "Giraffes", "Hippopotamus ", "Rhinoceroses"];
// const animalpictures = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve];


function Albumitems({output}) {
    const [titles,pictures] = output;
    return (
        <main id="main">
            {titles.map(function (value, index) {
                return (
                    <article className="imagecontainer" key={value}>
                        <a className="imageitem" href={pictures[index]}><img src={pictures[index]} alt={"photo of a/an " +  value} /></a>
                        <h2>{value}</h2>
                    </article>
                )
            })}
        </main>
    )
}

export default Albumitems