import ReactGA from "react-ga4";

const trackingCode = process.env.REACT_APP_GA_CODE || 'dev';

ReactGA.initialize(trackingCode!);

const ga: (location: string) => void = (location) => {
    try {
        ReactGA.send({ hitType: "pageview", page: location });
    } catch(e) {
        console.log(e);
    }
}

export default ga;