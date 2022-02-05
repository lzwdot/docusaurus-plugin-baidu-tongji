import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({ location }) {
      // 触发百度的pv统计
      if (typeof _hmt !== undefined) {
        if (location.pathname) {
          _hmt.push(["_trackPageview", location.pathname]);
          //console.log("百度统计", location);
        }
      }
    },
  };
})();
