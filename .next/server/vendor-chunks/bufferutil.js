"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bufferutil";
exports.ids = ["vendor-chunks/bufferutil"];
exports.modules = {

/***/ "(action-browser)/./node_modules/bufferutil/fallback.js":
/*!*********************************************!*\
  !*** ./node_modules/bufferutil/fallback.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\n/**\n * Masks a buffer using the given mask.\n *\n * @param {Buffer} source The buffer to mask\n * @param {Buffer} mask The mask to use\n * @param {Buffer} output The buffer where to store the result\n * @param {Number} offset The offset at which to start writing\n * @param {Number} length The number of bytes to mask.\n * @public\n */\nconst mask = (source, mask, output, offset, length) => {\n  for (var i = 0; i < length; i++) {\n    output[offset + i] = source[i] ^ mask[i & 3];\n  }\n};\n\n/**\n * Unmasks a buffer using the given mask.\n *\n * @param {Buffer} buffer The buffer to unmask\n * @param {Buffer} mask The mask to use\n * @public\n */\nconst unmask = (buffer, mask) => {\n  // Required until https://github.com/nodejs/node/issues/9006 is resolved.\n  const length = buffer.length;\n  for (var i = 0; i < length; i++) {\n    buffer[i] ^= mask[i & 3];\n  }\n};\n\nmodule.exports = { mask, unmask };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9idWZmZXJ1dGlsL2ZhbGxiYWNrLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWRmYXItZWNvbW1lcmNlLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYnVmZmVydXRpbC9mYWxsYmFjay5qcz9hN2Y5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNYXNrcyBhIGJ1ZmZlciB1c2luZyB0aGUgZ2l2ZW4gbWFzay5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gc291cmNlIFRoZSBidWZmZXIgdG8gbWFza1xuICogQHBhcmFtIHtCdWZmZXJ9IG1hc2sgVGhlIG1hc2sgdG8gdXNlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gb3V0cHV0IFRoZSBidWZmZXIgd2hlcmUgdG8gc3RvcmUgdGhlIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBUaGUgb2Zmc2V0IGF0IHdoaWNoIHRvIHN0YXJ0IHdyaXRpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBieXRlcyB0byBtYXNrLlxuICogQHB1YmxpY1xuICovXG5jb25zdCBtYXNrID0gKHNvdXJjZSwgbWFzaywgb3V0cHV0LCBvZmZzZXQsIGxlbmd0aCkgPT4ge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0W29mZnNldCArIGldID0gc291cmNlW2ldIF4gbWFza1tpICYgM107XG4gIH1cbn07XG5cbi8qKlxuICogVW5tYXNrcyBhIGJ1ZmZlciB1c2luZyB0aGUgZ2l2ZW4gbWFzay5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gdW5tYXNrXG4gKiBAcGFyYW0ge0J1ZmZlcn0gbWFzayBUaGUgbWFzayB0byB1c2VcbiAqIEBwdWJsaWNcbiAqL1xuY29uc3QgdW5tYXNrID0gKGJ1ZmZlciwgbWFzaykgPT4ge1xuICAvLyBSZXF1aXJlZCB1bnRpbCBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzkwMDYgaXMgcmVzb2x2ZWQuXG4gIGNvbnN0IGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBidWZmZXJbaV0gXj0gbWFza1tpICYgM107XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyBtYXNrLCB1bm1hc2sgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/bufferutil/fallback.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/bufferutil/fallback.js":
/*!*********************************************!*\
  !*** ./node_modules/bufferutil/fallback.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\n/**\n * Masks a buffer using the given mask.\n *\n * @param {Buffer} source The buffer to mask\n * @param {Buffer} mask The mask to use\n * @param {Buffer} output The buffer where to store the result\n * @param {Number} offset The offset at which to start writing\n * @param {Number} length The number of bytes to mask.\n * @public\n */\nconst mask = (source, mask, output, offset, length) => {\n  for (var i = 0; i < length; i++) {\n    output[offset + i] = source[i] ^ mask[i & 3];\n  }\n};\n\n/**\n * Unmasks a buffer using the given mask.\n *\n * @param {Buffer} buffer The buffer to unmask\n * @param {Buffer} mask The mask to use\n * @public\n */\nconst unmask = (buffer, mask) => {\n  // Required until https://github.com/nodejs/node/issues/9006 is resolved.\n  const length = buffer.length;\n  for (var i = 0; i < length; i++) {\n    buffer[i] ^= mask[i & 3];\n  }\n};\n\nmodule.exports = { mask, unmask };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYnVmZmVydXRpbC9mYWxsYmFjay5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFkZmFyLWVjb21tZXJjZS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2J1ZmZlcnV0aWwvZmFsbGJhY2suanM/N2FmYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTWFza3MgYSBidWZmZXIgdXNpbmcgdGhlIGdpdmVuIG1hc2suXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IHNvdXJjZSBUaGUgYnVmZmVyIHRvIG1hc2tcbiAqIEBwYXJhbSB7QnVmZmVyfSBtYXNrIFRoZSBtYXNrIHRvIHVzZVxuICogQHBhcmFtIHtCdWZmZXJ9IG91dHB1dCBUaGUgYnVmZmVyIHdoZXJlIHRvIHN0b3JlIHRoZSByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgVGhlIG9mZnNldCBhdCB3aGljaCB0byBzdGFydCB3cml0aW5nXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gbWFzay5cbiAqIEBwdWJsaWNcbiAqL1xuY29uc3QgbWFzayA9IChzb3VyY2UsIG1hc2ssIG91dHB1dCwgb2Zmc2V0LCBsZW5ndGgpID0+IHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFtvZmZzZXQgKyBpXSA9IHNvdXJjZVtpXSBeIG1hc2tbaSAmIDNdO1xuICB9XG59O1xuXG4vKipcbiAqIFVubWFza3MgYSBidWZmZXIgdXNpbmcgdGhlIGdpdmVuIG1hc2suXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHVubWFza1xuICogQHBhcmFtIHtCdWZmZXJ9IG1hc2sgVGhlIG1hc2sgdG8gdXNlXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IHVubWFzayA9IChidWZmZXIsIG1hc2spID0+IHtcbiAgLy8gUmVxdWlyZWQgdW50aWwgaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy85MDA2IGlzIHJlc29sdmVkLlxuICBjb25zdCBsZW5ndGggPSBidWZmZXIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYnVmZmVyW2ldIF49IG1hc2tbaSAmIDNdO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgbWFzaywgdW5tYXNrIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/bufferutil/fallback.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/bufferutil/index.js":
/*!******************************************!*\
  !*** ./node_modules/bufferutil/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\ntry {\n  module.exports = __webpack_require__(/*! node-gyp-build */ \"(action-browser)/./node_modules/node-gyp-build/index.js\")(__dirname);\n} catch (e) {\n  module.exports = __webpack_require__(/*! ./fallback */ \"(action-browser)/./node_modules/bufferutil/fallback.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9idWZmZXJ1dGlsL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsK0VBQWdCO0FBQzNDLEVBQUU7QUFDRixFQUFFLGdIQUFzQztBQUN4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhZGZhci1lY29tbWVyY2Utd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9idWZmZXJ1dGlsL2luZGV4LmpzP2UwZGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG50cnkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ25vZGUtZ3lwLWJ1aWxkJykoX19kaXJuYW1lKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhbGxiYWNrJyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/bufferutil/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/bufferutil/index.js":
/*!******************************************!*\
  !*** ./node_modules/bufferutil/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\ntry {\n  module.exports = __webpack_require__(/*! node-gyp-build */ \"(rsc)/./node_modules/node-gyp-build/index.js\")(__dirname);\n} catch (e) {\n  module.exports = __webpack_require__(/*! ./fallback */ \"(rsc)/./node_modules/bufferutil/fallback.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYnVmZmVydXRpbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLG9FQUFnQjtBQUMzQyxFQUFFO0FBQ0YsRUFBRSxxR0FBc0M7QUFDeEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWRmYXItZWNvbW1lcmNlLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYnVmZmVydXRpbC9pbmRleC5qcz9lOWFmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdub2RlLWd5cC1idWlsZCcpKF9fZGlybmFtZSk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWxsYmFjaycpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/bufferutil/index.js\n");

/***/ })

};
;