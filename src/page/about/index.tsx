import React from 'react';
import './index.less';
const About = () => {
    const  error = (err:any) => {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };
    const success = (pos:any) => {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
    };
    var options = {
        enableHighAccuracy: true,
        timeout: 500000,
        maximumAge: 0
      };

    window.navigator.geolocation.getCurrentPosition(success,error,options);
    return <section>
        <article className="about-wrapper">
        <article className="item">1</article>
        <article className="item">2</article>
        <article className="item">3</article>
        <article className="item">4</article>
        <article className="item">5</article>
        <article className="item">6</article>
        <article className="item">7</article>
        <article className="item">8</article>
        <article className="item">5</article>
        <article className="item">6</article>
        <article className="item">7</article>
        <article className="item">8</article>
        <article className="item">5</article>
        <article className="item">6</article>
        <article className="item">7</article>
        <article className="item">8</article>
        </article>
    </section>
}
export default About;