import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({ location }) {     
      if (typeof _hmt !== undefined) {
        if (location.pathname) {
          _hmt.push(["_trackPageview", location.pathname]);
          //console.log("tongji", location);
        }
      }
    },
  };
})();
