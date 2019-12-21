// const React = require('react');
// const loaderStyle = {
    // background: 'blue',
    // width: '100%',
    // height: '100vh',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // color: 'white',
// }
// const noScriptStyle = {
//     background: 'white',
//     position: 'absolute',
//     width: '100%',
//     padding: '1em',
// }
// const loader = (
//         <section style={loaderStyle} className="loadingScreen">
//             <h1 >loading...</h1>
//         </section>
// );
// const noScript = (
//     <noscript style={noScriptStyle}>
//         <h1>Javascript is disabled</h1>
//         <p>This site only works with Javascript enabled.</p>
//         <a target='_blanc' href="https://enable-javascript.com/">Instruction to turn on javascript ></a>
//     </noscript>
// );
// exports.onPreRenderHTML = ({ getPreBodyComponents, replacePreBodyComponents }) => {
//     const newComponents = [noScript, loader];
//     console.log(newComponents);
//     replacePreBodyComponents(newComponents);
// }