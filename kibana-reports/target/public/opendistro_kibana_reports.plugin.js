/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../packages/kbn-optimizer/target/worker/entry_point_creator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/babel-polyfill/lib/index.js":
/*!************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/babel-polyfill/lib/index.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(/*! core-js/shim */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/shim.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "../../.private-dashboards-reports/kibana-reports/node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/fn/regexp/escape */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/fn/regexp/escape.js");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/fn/regexp/escape.js":
/*!************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/fn/regexp/escape.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/core.regexp.escape */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/core.regexp.escape.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js").RegExp.escape;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-number-value.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-number-value.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(/*! ./_cof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_add-to-unscopables.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_add-to-unscopables.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_advance-string-index.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_advance-string-index.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-instance.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-instance.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-copy-within.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-copy-within.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-fill.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-fill.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-from-iterable.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-from-iterable.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-includes.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-includes.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-reduce.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-reduce.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-species-constructor.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-species-constructor.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-species-create.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-species-create.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_bind.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_bind.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_classof.js":
/*!************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_classof.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js":
/*!********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-strong.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-strong.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-to-json.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-to-json.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-weak.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-weak.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_create-property.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_create-property.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js":
/*!********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_date-to-iso-string.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_date-to-iso-string.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_date-to-primitive.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_date-to-primitive.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js":
/*!************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_dom-create.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_dom-create.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_enum-bug-keys.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_enum-bug-keys.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_enum-keys.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_enum-keys.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails-is-regexp.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails-is-regexp.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fix-re-wks.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fix-re-wks.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_flags.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_flags.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_flatten-into-array.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_flatten-into-array.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_for-of.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_for-of.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_function-to-string.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_function-to-string.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js":
/*!********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_html.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_html.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ie8-dom-define.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_inherit-if-required.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_inherit-if-required.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_invoke.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_invoke.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iobject.js":
/*!************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iobject.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-array-iter.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-array-iter.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-array.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-array.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-integer.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-integer.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-regexp.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-regexp.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-call.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-call.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-create.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-create.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-define.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-define.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-detect.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-detect.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-step.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-step.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iterators.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iterators.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_library.js":
/*!************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_library.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-expm1.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-expm1.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-fround.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-fround.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-log1p.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-log1p.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-scale.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-scale.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-sign.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-sign.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_meta.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_meta.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_metadata.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_metadata.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_microtask.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_microtask.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_new-promise-capability.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_new-promise-capability.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-assign.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-assign.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-create.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-create.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dps.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dps.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-forced-pam.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-forced-pam.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(/*! ./_library */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_library.js") || !__webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js")[K];
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn-ext.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn-ext.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gops.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gops.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys-internal.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys-internal.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-pie.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-pie.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-to-array.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-to-array.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_own-keys.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_own-keys.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_parse-float.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_parse-float.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_parse-int.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_parse-int.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_perform.js":
/*!************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_perform.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_promise-resolve.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_promise-resolve.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_property-desc.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_property-desc.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine-all.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine-all.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_regexp-exec.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_regexp-exec.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_replacer.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_replacer.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_same-value.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_same-value.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-from.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-from.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-of.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-of.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-proto.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-proto.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-species.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-species.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-to-string-tag.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared-key.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared-key.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_species-constructor.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_species-constructor.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-at.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-at.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-context.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-context.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-pad.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-pad.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-repeat.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-repeat.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-trim.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-trim.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-ws.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-ws.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_task.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_task.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-absolute-index.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-absolute-index.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-index.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-index.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-array.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-array.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");
  var gOPN = __webpack_require__(/*! ./_object-gopn */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn.js").f;
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-buffer.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-buffer.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-index.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js").f;
var arrayFill = __webpack_require__(/*! ./_array-fill */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_uid.js":
/*!********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_uid.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_user-agent.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_user-agent.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_validate-collection.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_validate-collection.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks-define.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks-define.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks-ext.js":
/*!************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks-ext.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js":
/*!********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/core.get-iterator-method.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/core.get-iterator-method.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/core.regexp.escape.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/core.regexp.escape.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $re = __webpack_require__(/*! ./_replacer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_replacer.js")(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.copy-within.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.copy-within.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.every.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.every.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.fill.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.fill.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.filter.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.filter.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.find-index.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.find-index.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.find.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.find.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.for-each.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.for-each.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.from.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.from.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.index-of.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.index-of.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.is-array.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.is-array.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.iterator.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.iterator.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.join.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.join.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.last-index-of.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.map.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.map.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.of.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.of.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.reduce-right.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.reduce.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.reduce.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.slice.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.slice.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.some.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.some.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.sort.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.sort.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.species.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.species.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.now.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.now.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-json.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-json.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-primitive.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-string.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-string.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.function.bind.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.function.bind.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.function.has-instance.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js").f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.function.name.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.function.name.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.map.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.map.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.acosh.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.acosh.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.asinh.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.asinh.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.atanh.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.atanh.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.cbrt.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.clz32.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.clz32.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.cosh.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.cosh.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.expm1.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.expm1.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.fround.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.fround.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.hypot.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.hypot.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.imul.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.imul.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.log10.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.log10.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.log1p.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.log1p.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.log2.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.log2.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.sign.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.sign.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.sinh.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.sinh.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.tanh.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.tanh.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.trunc.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.trunc.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.constructor.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.constructor.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn.js").f;
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js").f;
var $trim = __webpack_require__(/*! ./_string-trim */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-trim.js").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.epsilon.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.epsilon.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-finite.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-finite.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var _isFinite = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-integer.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-integer.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-nan.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-nan.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.parse-float.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.parse-float.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.parse-int.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.parse-int.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.to-fixed.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.to-precision.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.to-precision.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.assign.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.assign.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.create.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.create.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.define-properties.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.define-properties.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.define-property.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.define-property.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js").f });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.freeze.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.freeze.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is-extensible.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is-frozen.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is-sealed.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.keys.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.keys.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.seal.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.seal.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.to-string.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.to-string.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.parse-float.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.parse-float.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.parse-int.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.parse-int.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.promise.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.promise.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.apply.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.apply.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.construct.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.construct.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.get.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.get.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.has.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.has.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.set.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.set.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.constructor.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.exec.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.flags.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.flags.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.match.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.match.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.replace.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.replace.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.search.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.search.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.split.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.split.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.to-string.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.set.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.set.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.anchor.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.anchor.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.big.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.big.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.blink.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.blink.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.bold.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.bold.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.code-point-at.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.ends-with.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.ends-with.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.fixed.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.fixed.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.fontcolor.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.fontsize.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.fontsize.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.from-code-point.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.includes.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.includes.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.italics.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.italics.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.iterator.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.iterator.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.link.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.link.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.raw.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.raw.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.repeat.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.repeat.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.small.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.small.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.starts-with.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.starts-with.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.strike.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.strike.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.sub.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.sub.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.sup.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.sup.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.trim.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.trim.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.symbol.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.symbol.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js").ArrayBuffer;
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.data-view.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.data-view.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed.js").ABV, {
  DataView: __webpack_require__(/*! ./_typed-buffer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-buffer.js").DataView
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.float32-array.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.float64-array.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.int16-array.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.int32-array.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.int8-array.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.weak-map.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.weak-map.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.weak-set.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.weak-set.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.array.flat-map.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.array.flat-map.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.array.flatten.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.array.flatten.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-integer.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_add-to-unscopables.js")('flatten');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.array.includes.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.array.includes.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.asap.js":
/*!************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.asap.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var microtask = __webpack_require__(/*! ./_microtask */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_microtask.js")();
var process = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js").process;
var isNode = __webpack_require__(/*! ./_cof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js")(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.error.is-error.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.error.is-error.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var cof = __webpack_require__(/*! ./_cof */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_cof.js");

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.global.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.global.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.map.from.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.map.from.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.map.of.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.map.of.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.map.to-json.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.map.to-json.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.clamp.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.clamp.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.degrees.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.degrees.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.fscale.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.fscale.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var scale = __webpack_require__(/*! ./_math-scale */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-scale.js");
var fround = __webpack_require__(/*! ./_math-fround */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-fround.js");

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.iaddh.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.iaddh.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.imulh.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.imulh.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.isubh.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.isubh.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.radians.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.radians.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.scale.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.scale.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { scale: __webpack_require__(/*! ./_math-scale */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_math-scale.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.signbit.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.signbit.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.umulh.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.umulh.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.define-getter.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.define-getter.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js");

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.define-setter.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.define-setter.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__(/*! ./_object-dp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-dp.js");

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.entries.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.entries.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(/*! ./_descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.values.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.values.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.observable.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.observable.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js");
var microtask = __webpack_require__(/*! ./_microtask */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_microtask.js")();
var OBSERVABLE = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js")('observable');
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-instance.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine-all.js");
var hide = __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_for-of.js");
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(/*! ./_set-species */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-species.js")('Observable');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.promise.finally.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.promise.finally.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.promise.try.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.promise.try.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.metadata.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.set.from.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.set.from.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.set.of.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.set.of.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.set.to-json.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.set.to-json.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.at.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.at.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-at.js")(true);
var $fails = __webpack_require__(/*! ./_fails */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_fails.js");

var FORCED = $fails(function () {
  return '𠮷'.at(0) !== '𠮷';
});

$export($export.P + $export.F * FORCED, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.match-all.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.match-all.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_defined.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_to-length.js");
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_is-regexp.js");
var getFlags = __webpack_require__(/*! ./_flags */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_flags.js");
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(/*! ./_iter-create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iter-create.js")($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.pad-end.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.pad-end.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.pad-start.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.pad-start.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.trim-left.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.trim-left.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.trim-right.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.trim-right.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.symbol.observable.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.symbol.observable.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks-define.js")('observable');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.system.global.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.system.global.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");

$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-map.from.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-map.from.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(/*! ./_set-collection-from */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-from.js")('WeakMap');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-map.of.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(/*! ./_set-collection-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-of.js")('WeakMap');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-set.from.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-set.from.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(/*! ./_set-collection-from */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-from.js")('WeakSet');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-set.of.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(/*! ./_set-collection-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_set-collection-of.js")('WeakSet');


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/web.dom.iterable.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/web.dom.iterable.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/web.immediate.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/web.immediate.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/web.timers.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/web.timers.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/shim.js":
/*!************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/node_modules/core-js/shim.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./modules/es6.symbol */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ./modules/es6.object.create */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ./modules/es6.object.define-property */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ./modules/es6.object.define-properties */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ./modules/es6.object.keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ./modules/es6.object.freeze */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ./modules/es6.object.seal */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ./modules/es6.object.is-frozen */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ./modules/es6.object.is-sealed */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ./modules/es6.object.is-extensible */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ./modules/es6.object.assign */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ./modules/es6.object.is */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ./modules/es6.object.to-string */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ./modules/es6.function.bind */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ./modules/es6.function.name */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ./modules/es6.function.has-instance */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ./modules/es6.parse-int */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ./modules/es6.parse-float */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ./modules/es6.number.constructor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ./modules/es6.number.to-fixed */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ./modules/es6.number.to-precision */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ./modules/es6.number.epsilon */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ./modules/es6.number.is-finite */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ./modules/es6.number.is-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ./modules/es6.number.is-nan */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.parse-float */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ./modules/es6.number.parse-int */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ./modules/es6.math.acosh */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ./modules/es6.math.asinh */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ./modules/es6.math.atanh */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ./modules/es6.math.cbrt */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ./modules/es6.math.clz32 */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ./modules/es6.math.cosh */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ./modules/es6.math.expm1 */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ./modules/es6.math.fround */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ./modules/es6.math.hypot */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ./modules/es6.math.imul */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ./modules/es6.math.log10 */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ./modules/es6.math.log1p */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ./modules/es6.math.log2 */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ./modules/es6.math.sign */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ./modules/es6.math.sinh */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ./modules/es6.math.tanh */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ./modules/es6.math.trunc */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ./modules/es6.string.from-code-point */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ./modules/es6.string.raw */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ./modules/es6.string.trim */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ./modules/es6.string.iterator */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ./modules/es6.string.code-point-at */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ./modules/es6.string.ends-with */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ./modules/es6.string.includes */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ./modules/es6.string.repeat */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ./modules/es6.string.starts-with */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ./modules/es6.string.anchor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ./modules/es6.string.big */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ./modules/es6.string.blink */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ./modules/es6.string.bold */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ./modules/es6.string.fixed */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ./modules/es6.string.fontcolor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ./modules/es6.string.fontsize */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ./modules/es6.string.italics */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ./modules/es6.string.link */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ./modules/es6.string.small */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ./modules/es6.string.strike */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ./modules/es6.string.sub */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ./modules/es6.string.sup */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ./modules/es6.date.now */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ./modules/es6.date.to-json */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ./modules/es6.date.to-iso-string */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ./modules/es6.date.to-string */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ./modules/es6.date.to-primitive */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ./modules/es6.array.is-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ./modules/es6.array.from */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ./modules/es6.array.of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ./modules/es6.array.join */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ./modules/es6.array.slice */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ./modules/es6.array.sort */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ./modules/es6.array.for-each */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ./modules/es6.array.map */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ./modules/es6.array.filter */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ./modules/es6.array.some */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ./modules/es6.array.every */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ./modules/es6.array.reduce */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ./modules/es6.array.reduce-right */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ./modules/es6.array.index-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ./modules/es6.array.last-index-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ./modules/es6.array.copy-within */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ./modules/es6.array.fill */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ./modules/es6.array.find */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ./modules/es6.array.find-index */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ./modules/es6.array.species */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ./modules/es6.array.iterator */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ./modules/es6.regexp.constructor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ./modules/es6.regexp.exec */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ./modules/es6.regexp.to-string */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ./modules/es6.regexp.flags */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ./modules/es6.regexp.match */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ./modules/es6.regexp.replace */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ./modules/es6.regexp.search */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ./modules/es6.regexp.split */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ./modules/es6.promise */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ./modules/es6.map */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ./modules/es6.set */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ./modules/es6.weak-map */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ./modules/es6.weak-set */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ./modules/es6.typed.array-buffer */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ./modules/es6.typed.data-view */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ./modules/es6.typed.int8-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint8-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ./modules/es6.typed.int16-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint16-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ./modules/es6.typed.int32-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint32-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ./modules/es6.typed.float32-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ./modules/es6.typed.float64-array */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ./modules/es6.reflect.apply */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ./modules/es6.reflect.construct */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ./modules/es6.reflect.define-property */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ./modules/es6.reflect.delete-property */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ./modules/es6.reflect.enumerate */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ./modules/es6.reflect.get */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ./modules/es6.reflect.has */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ./modules/es6.reflect.own-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ./modules/es6.reflect.set */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
__webpack_require__(/*! ./modules/es7.array.includes */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.array.includes.js");
__webpack_require__(/*! ./modules/es7.array.flat-map */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.array.flat-map.js");
__webpack_require__(/*! ./modules/es7.array.flatten */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.array.flatten.js");
__webpack_require__(/*! ./modules/es7.string.at */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.at.js");
__webpack_require__(/*! ./modules/es7.string.pad-start */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.pad-start.js");
__webpack_require__(/*! ./modules/es7.string.pad-end */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.pad-end.js");
__webpack_require__(/*! ./modules/es7.string.trim-left */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.trim-left.js");
__webpack_require__(/*! ./modules/es7.string.trim-right */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.trim-right.js");
__webpack_require__(/*! ./modules/es7.string.match-all */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.string.match-all.js");
__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ./modules/es7.symbol.observable */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.symbol.observable.js");
__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
__webpack_require__(/*! ./modules/es7.object.values */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.values.js");
__webpack_require__(/*! ./modules/es7.object.entries */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.entries.js");
__webpack_require__(/*! ./modules/es7.object.define-getter */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.define-getter.js");
__webpack_require__(/*! ./modules/es7.object.define-setter */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.define-setter.js");
__webpack_require__(/*! ./modules/es7.object.lookup-getter */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.lookup-getter.js");
__webpack_require__(/*! ./modules/es7.object.lookup-setter */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.object.lookup-setter.js");
__webpack_require__(/*! ./modules/es7.map.to-json */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.map.to-json.js");
__webpack_require__(/*! ./modules/es7.set.to-json */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.set.to-json.js");
__webpack_require__(/*! ./modules/es7.map.of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.map.of.js");
__webpack_require__(/*! ./modules/es7.set.of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.set.of.js");
__webpack_require__(/*! ./modules/es7.weak-map.of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-map.of.js");
__webpack_require__(/*! ./modules/es7.weak-set.of */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-set.of.js");
__webpack_require__(/*! ./modules/es7.map.from */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.map.from.js");
__webpack_require__(/*! ./modules/es7.set.from */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.set.from.js");
__webpack_require__(/*! ./modules/es7.weak-map.from */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-map.from.js");
__webpack_require__(/*! ./modules/es7.weak-set.from */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.weak-set.from.js");
__webpack_require__(/*! ./modules/es7.global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.global.js");
__webpack_require__(/*! ./modules/es7.system.global */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.system.global.js");
__webpack_require__(/*! ./modules/es7.error.is-error */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.error.is-error.js");
__webpack_require__(/*! ./modules/es7.math.clamp */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.clamp.js");
__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.deg-per-rad.js");
__webpack_require__(/*! ./modules/es7.math.degrees */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.degrees.js");
__webpack_require__(/*! ./modules/es7.math.fscale */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.fscale.js");
__webpack_require__(/*! ./modules/es7.math.iaddh */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.iaddh.js");
__webpack_require__(/*! ./modules/es7.math.isubh */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.isubh.js");
__webpack_require__(/*! ./modules/es7.math.imulh */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.imulh.js");
__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.rad-per-deg.js");
__webpack_require__(/*! ./modules/es7.math.radians */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.radians.js");
__webpack_require__(/*! ./modules/es7.math.scale */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.scale.js");
__webpack_require__(/*! ./modules/es7.math.umulh */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.umulh.js");
__webpack_require__(/*! ./modules/es7.math.signbit */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.math.signbit.js");
__webpack_require__(/*! ./modules/es7.promise.finally */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.promise.finally.js");
__webpack_require__(/*! ./modules/es7.promise.try */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.promise.try.js");
__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.metadata */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.reflect.metadata.js");
__webpack_require__(/*! ./modules/es7.asap */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.asap.js");
__webpack_require__(/*! ./modules/es7.observable */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/es7.observable.js");
__webpack_require__(/*! ./modules/web.timers */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ./modules/web.immediate */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ./modules/web.dom.iterable */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ./modules/_core */ "../../.private-dashboards-reports/kibana-reports/node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/public/components/context_menu/context_menu.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/components/context_menu/context_menu.js ***!
  \******************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/datemath */ "../../packages/elastic-datemath/target/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_main_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/main_utils */ "../../.private-dashboards-reports/kibana-reports/public/components/main/main_utils.tsx");
/* harmony import */ var _context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context_menu_helpers */ "../../.private-dashboards-reports/kibana-reports/public/components/context_menu/context_menu_helpers.js");
/* harmony import */ var _context_menu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context_menu_ui */ "../../.private-dashboards-reports/kibana-reports/public/components/context_menu/context_menu_ui.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v4 */ "../../node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ "../../.private-dashboards-reports/kibana-reports/public/components/utils/utils.tsx");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url */ "../../node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_8__);
/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

/* eslint-disable no-restricted-globals */










const generateInContextReport = async (timeRanges, queryUrl, fileFormat, rest = {}) => {
  Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["displayLoadingModal"])();
  const baseUrl = queryUrl.substr(0, queryUrl.indexOf('?')); // Add selected tenant info to url

  try {
    const tenant = await getTenantInfoIfExists();

    if (tenant) {
      queryUrl = addTenantToURL(queryUrl, tenant);
    }
  } catch (error) {
    Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["addSuccessOrFailureToast"])('failure');
    console.log(`failed to get user tenant: ${error}`);
  }

  let reportSource = '';

  if (baseUrl.includes('dashboard')) {
    reportSource = 'Dashboard';
  } else if (baseUrl.includes('visualize')) {
    reportSource = 'Visualization';
  } else if (baseUrl.includes('discover')) {
    reportSource = 'Saved search';
  } // create query body


  let contextMenuOnDemandReport = {
    query_url: queryUrl,
    time_from: timeRanges.time_from.valueOf(),
    time_to: timeRanges.time_to.valueOf(),
    report_definition: {
      report_params: {
        report_name: reportSource + '_' + uuid_v4__WEBPACK_IMPORTED_MODULE_5___default()(),
        report_source: reportSource,
        description: jquery__WEBPACK_IMPORTED_MODULE_0___default()('span.euiBreadcrumb').prop('title'),
        core_params: {
          base_url: baseUrl,
          report_format: fileFormat,
          time_duration: timeRanges.time_duration,
          ...rest
        }
      },
      delivery: {
        delivery_type: 'Kibana user',
        delivery_params: {
          kibana_recipients: []
        }
      },
      trigger: {
        trigger_type: 'On demand'
      }
    }
  };
  fetch(`../api/reporting/generateReport?timezone=${Intl.DateTimeFormat().resolvedOptions().timeZone}`, {
    headers: {
      'Content-Type': 'application/json',
      'kbn-version': '7.9.1',
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6',
      pragma: 'no-cache',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin'
    },
    method: 'POST',
    body: JSON.stringify(contextMenuOnDemandReport),
    referrerPolicy: 'strict-origin-when-cross-origin',
    mode: 'cors',
    credentials: 'include'
  }).then(response => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#reportGenerationProgressModal').remove();

    if (response.status === 200) {
      Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["addSuccessOrFailureToast"])('success');
    } else {
      if (response.status === 403) {
        Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["addSuccessOrFailureToast"])('permissionsFailure');
      } else if (response.status === 503) {
        Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["addSuccessOrFailureToast"])('timeoutFailure', reportSource);
      } else {
        Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["addSuccessOrFailureToast"])('failure');
      }
    }

    return response.json();
  }).then(async data => {
    await Object(_main_main_utils__WEBPACK_IMPORTED_MODULE_2__["readStreamToFile"])(data.data, fileFormat, data.filename);
  });
}; // open Download drop-down


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#downloadReport', function () {
    const popoverScreen = document.querySelectorAll('body');

    if (popoverScreen) {
      try {
        const reportPopover = document.createElement('div');
        reportPopover.innerHTML = isDiscover() ? Object(_context_menu_ui__WEBPACK_IMPORTED_MODULE_4__["popoverMenuDiscover"])(getUuidFromUrl()) : Object(_context_menu_ui__WEBPACK_IMPORTED_MODULE_4__["popoverMenu"])(getUuidFromUrl());
        popoverScreen[0].appendChild(reportPopover.children[0]);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#reportPopover').show();
      } catch (e) {
        console.log('error displaying menu:', e);
      }
    }
  }); // generate PDF onclick

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#generatePDF', function () {
    const timeRanges = Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["getTimeFieldsFromUrl"])();
    const queryUrl = Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["replaceQueryURL"])(location.href);
    generateInContextReport(timeRanges, queryUrl, 'pdf');
  }); // generate PNG onclick

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#generatePNG', function () {
    const timeRanges = Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["getTimeFieldsFromUrl"])();
    const queryUrl = Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["replaceQueryURL"])(location.href);
    generateInContextReport(timeRanges, queryUrl, 'png');
  }); // generate CSV onclick

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#generateCSV', function () {
    const timeRanges = Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["getTimeFieldsFromUrl"])();
    const queryUrl = Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["replaceQueryURL"])(location.href);
    const saved_search_id = getUuidFromUrl()[1];
    generateInContextReport(timeRanges, queryUrl, 'csv', {
      saved_search_id
    });
  }); // navigate to Create report definition page with report source and pre-set time range

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#createReportDefinition', function () {
    Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["contextMenuCreateReportDefinition"])(this.baseURI);
  }); // redirect to Reporting home page

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#viewReports', function () {
    Object(_context_menu_helpers__WEBPACK_IMPORTED_MODULE_3__["contextMenuViewReports"])();
  }); // close popover menu on click outside

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('toggle') !== '#downloadReport') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#reportPopover').remove();
    }
  }); // close modal/toast

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    // close modal with 'x' in upper-right modal
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#closeReportGenerationModal', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#reportGenerationProgressModal').remove();
    }); // close modal with the close EuiButton

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#closeReportGenerationModalButton', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#reportGenerationProgressModal').remove();
    }); // close the toast that appears upon successful report generation

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#closeReportSuccessToast', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#reportSuccessToast').remove();
    }); // close the toast that apepars upon failure of report generation

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#closeReportFailureToast', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#reportFailureToast').remove();
    }); // close permissions failure toast

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#permissionsMissingErrorToast', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#permissionsMissingErrorToast').remove();
    });
  });
  locationHashChanged();
});

const isDiscoverNavMenu = navMenu => {
  return navMenu[0].children.length === 5 && (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-test-subj="breadcrumb first"]').prop('title') === 'Discover' || jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-test-subj="breadcrumb first last"]').prop('title') === 'Discover');
};

const isDashboardNavMenu = navMenu => {
  return (navMenu[0].children.length === 4 || navMenu[0].children.length === 6) && jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-test-subj="breadcrumb first"]').prop('title') === 'Dashboard';
};

const isVisualizationNavMenu = navMenu => {
  return navMenu[0].children.length === 3 && jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-test-subj="breadcrumb first"]').prop('title') === 'Visualize';
};

function locationHashChanged() {
  const observer = new MutationObserver(function (mutations) {
    const navMenu = document.querySelectorAll('span.kbnTopNavMenu__wrapper > div.euiFlexGroup');

    if (navMenu && navMenu.length && (isDiscoverNavMenu(navMenu) || isDashboardNavMenu(navMenu) || isVisualizationNavMenu(navMenu))) {
      try {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#downloadReport').length) {
          return;
        }

        const menuItem = document.createElement('div');
        menuItem.innerHTML = Object(_context_menu_ui__WEBPACK_IMPORTED_MODULE_4__["getMenuItem"])('Reporting');
        navMenu[0].appendChild(menuItem.children[0]);
      } catch (e) {
        console.log(e);
      } finally {
        observer.disconnect();
      }
    }
  }); // Start observing

  observer.observe(document.body, {
    //document.body is node target to observe
    childList: true,
    //This is a must have for the observer with subtree
    subtree: true //Set to true if changes must also be observed in descendants.

  });
} // try to match uuid followed by '?' in URL, which would be the saved search id for discover URL


const getUuidFromUrl = () => window.location.href.match(/(\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b)\?/);

const isDiscover = () => window.location.href.includes('discover');

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('hashchange', function (e) {
  locationHashChanged();
});
/**
 * for navigating to tabs from Kibana sidebar, it uses history.pushState, which doesn't trigger onHashchange.
 * https://stackoverflow.com/questions/4570093/how-to-get-notified-about-changes-of-the-history-via-history-pushstate/4585031
 */

(function (history) {
  const pushState = history.pushState;

  history.pushState = function (state) {
    if (typeof history.onpushstate === 'function') {
      history.onpushstate({
        state: state
      });
    }

    return pushState.apply(history, arguments);
  };
})(window.history);

window.onpopstate = history.onpushstate = () => {
  locationHashChanged();
};

async function getTenantInfoIfExists() {
  const res = await fetch(`../api/v1/multitenancy/tenant`, {
    headers: {
      'Content-Type': 'application/json',
      'kbn-version': '7.9.1',
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6',
      pragma: 'no-cache',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin'
    },
    method: 'GET',
    referrerPolicy: 'strict-origin-when-cross-origin',
    mode: 'cors',
    credentials: 'include'
  }).then(response => {
    if (response.status === 404) {
      // endpoint doesn't exist, security plugin is not enabled.
      return undefined;
    } else {
      return response.text();
    }
  }).then(tenant => {
    if (tenant === '') {
      tenant = 'global';
    } else if (tenant === '__user__') {
      tenant = 'private';
    }

    return tenant;
  });
  return res;
} // helper function to add tenant info to url(if tenant is available)


function addTenantToURL(url, userRequestedTenant) {
  // build fake url from relative url
  const fakeUrl = `http://opendistro.com${url}`;
  const tenantKey = 'security_tenant';
  const tenantKeyAndValue = tenantKey + '=' + encodeURIComponent(userRequestedTenant);
  const {
    pathname,
    search
  } = Object(url__WEBPACK_IMPORTED_MODULE_7__["parse"])(fakeUrl);
  const queryDelimiter = !search ? '?' : '&'; // The url parser returns null if the search is empty. Change that to an empty
  // string so that we can use it to build the values later

  if (search && search.toLowerCase().indexOf(tenantKey) > -1) {
    // If we for some reason already have a tenant in the URL we skip any updates
    return url;
  } // A helper for finding the part in the string that we want to extend/replace


  const valueToReplace = pathname + (search || '');
  const replaceWith = valueToReplace + queryDelimiter + tenantKeyAndValue;
  return url.replace(valueToReplace, replaceWith);
}

/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/public/components/context_menu/context_menu_helpers.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/components/context_menu/context_menu_helpers.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: contextMenuCreateReportDefinition, contextMenuViewReports, getTimeFieldsFromUrl, displayLoadingModal, addSuccessOrFailureToast, replaceQueryURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contextMenuCreateReportDefinition", function() { return contextMenuCreateReportDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contextMenuViewReports", function() { return contextMenuViewReports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFieldsFromUrl", function() { return getTimeFieldsFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayLoadingModal", function() { return displayLoadingModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSuccessOrFailureToast", function() { return addSuccessOrFailureToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceQueryURL", function() { return replaceQueryURL; });
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/datemath */ "../../packages/elastic-datemath/target/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_menu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context_menu_ui */ "../../.private-dashboards-reports/kibana-reports/public/components/context_menu/context_menu_ui.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "../../.private-dashboards-reports/kibana-reports/public/components/utils/utils.tsx");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */






const getReportSourceURL = baseURI => {
  let url = baseURI.substr(0, baseURI.indexOf('?'));
  const reportSourceId = url.substr(url.lastIndexOf('/') + 1, url.length);
  return reportSourceId;
};

const contextMenuCreateReportDefinition = baseURI => {
  const reportSourceId = getReportSourceURL(baseURI);
  let reportSource = '';
  let timeRanges = getTimeFieldsFromUrl(); // check report source

  if (baseURI.includes('dashboard')) {
    reportSource = 'dashboard:';
  } else if (baseURI.includes('visualize')) {
    reportSource = 'visualize:';
  } else if (baseURI.includes('discover')) {
    reportSource = 'discover:';
  }

  reportSource += reportSourceId.toString();
  window.location.assign(`opendistro_kibana_reports#/create?previous=${reportSource}?timeFrom=${timeRanges.time_from.toISOString()}?timeTo=${timeRanges.time_to.toISOString()}`);
};
const contextMenuViewReports = () => window.location.assign('opendistro_kibana_reports#/');
const getTimeFieldsFromUrl = () => {
  const url = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4__["unhashUrl"])(window.location.href);
  let [, fromDateString, toDateString] = url.match(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["timeRangeMatcher"]);
  fromDateString = fromDateString.replace(/[']+/g, ''); // convert time range to from date format in case time range is relative

  const fromDateFormat = _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.parse(fromDateString);
  toDateString = toDateString.replace(/[']+/g, '');
  let toDateFormat = _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.parse(toDateString);
  const timeDuration = moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(_elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.parse(toDateString).diff(_elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.parse(fromDateString)));
  return {
    time_from: fromDateFormat,
    time_to: toDateFormat,
    time_duration: timeDuration.toISOString()
  };
};
const displayLoadingModal = () => {
  const kibanaBody = document.getElementById('kibana-body');

  if (kibanaBody) {
    try {
      const loadingModal = document.createElement('div');
      loadingModal.innerHTML = Object(_context_menu_ui__WEBPACK_IMPORTED_MODULE_2__["reportGenerationInProgressModal"])();
      kibanaBody.appendChild(loadingModal.children[0]);
    } catch (e) {
      console.log('error displaying loading modal:', e);
    }
  }
};
const addSuccessOrFailureToast = (status, reportSource) => {
  const generateToast = document.querySelectorAll('.euiGlobalToastList');

  if (generateToast) {
    try {
      const generateInProgressToast = document.createElement('div');

      if (status === 'success') {
        generateInProgressToast.innerHTML = Object(_context_menu_ui__WEBPACK_IMPORTED_MODULE_2__["reportGenerationSuccess"])();
        setTimeout(function () {
          document.getElementById('reportSuccessToast').style.display = 'none';
        }, 6000); // closes toast automatically after 6s
      } else if (status === 'failure') {
        generateInProgressToast.innerHTML = Object(_context_menu_ui__WEBPACK_IMPORTED_MODULE_2__["reportGenerationFailure"])();
        setTimeout(function () {
          document.getElementById('reportFailureToast').style.display = 'none';
        }, 6000);
      } else if (status === 'timeoutFailure') {
        generateInProgressToast.innerHTML = Object(_context_menu_ui__WEBPACK_IMPORTED_MODULE_2__["reportGenerationFailure"])('Error generating report.', `Timed out generating on-demand report from ${reportSource}. Try again later.`);
        setTimeout(function () {
          document.getElementById('reportFailureToast').style.display = 'none';
        }, 6000);
      } else if (status === 'permissionsFailure') {
        generateInProgressToast.innerHTML = Object(_context_menu_ui__WEBPACK_IMPORTED_MODULE_2__["permissionsMissingOnGeneration"])();
        setTimeout(function () {
          document.getElementById('permissionsMissingErrorToast').style.display = 'none';
        }, 6000);
      }

      generateToast[0].appendChild(generateInProgressToast.children[0]);
    } catch (e) {
      console.log('error displaying toast', e);
    }
  }
};
const replaceQueryURL = pageUrl => {
  // we unhash the url in case Kibana advanced UI setting 'state:storeInSessionStorage' is turned on
  const unhashedUrl = new URL(Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4__["unhashUrl"])(pageUrl));
  let queryUrl = unhashedUrl.pathname + unhashedUrl.hash;
  let [, fromDateString, toDateString] = queryUrl.match(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["timeRangeMatcher"]);
  fromDateString = fromDateString.replace(/[']+/g, ''); // convert time range to from date format in case time range is relative

  const fromDateFormat = _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.parse(fromDateString);
  toDateString = toDateString.replace(/[']+/g, '');
  const toDateFormat = _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.parse(toDateString); // replace to and from dates with absolute date

  queryUrl = queryUrl.replace(fromDateString, "'" + fromDateFormat.toISOString() + "'");
  queryUrl = queryUrl.replace(toDateString + '))', "'" + toDateFormat.toISOString() + "'))");
  return queryUrl;
};

/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/public/components/context_menu/context_menu_ui.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/components/context_menu/context_menu_ui.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: getMenuItem, popoverMenu, popoverMenuDiscover, permissionsMissingOnGeneration, reportGenerationSuccess, reportGenerationFailure, reportGenerationInProgressModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuItem", function() { return getMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popoverMenu", function() { return popoverMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popoverMenuDiscover", function() { return popoverMenuDiscover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionsMissingOnGeneration", function() { return permissionsMissingOnGeneration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportGenerationSuccess", function() { return reportGenerationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportGenerationFailure", function() { return reportGenerationFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportGenerationInProgressModal", function() { return reportGenerationInProgressModal; });
/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
const getMenuItem = name => {
  return `
  <div class="euiFlexItem euiFlexItem--flexGrowZero">
    <button class="euiButtonEmpty euiButtonEmpty--primary euiButtonEmpty--xSmall" type="button" id="downloadReport">
      <span class="euiButtonEmpty__content"><span class="euiButtonEmpty__text">${name}</span>
      </span>
    </button>
  </div>
  `;
};
const popoverMenu = savedObjectAvailable => {
  const buttonClass = savedObjectAvailable ? 'euiContextMenuItem' : 'euiContextMenuItem euiContextMenuItem-isDisabled';
  const button = savedObjectAvailable ? 'button' : 'button disabled';
  const popoverHeight = savedObjectAvailable ? '213px' : '198px';
  const message = savedObjectAvailable ? `Files can take a minute or two to generate depending on the size of your source data.` : `Save this Visualization/Dashboard to enable PDF/PNG reports.`;
  return `
    <div>
      <div data-focus-guard="true" tabindex="-1" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;">
    </div>
      <div data-focus-guard="true" tabindex="-1" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;">
    </div>
    <div data-focus-lock-disabled="disabled">
       <div class="euiPanel euiPopover__panel euiPopover__panel--bottom euiPopover__panel-isOpen euiPopover__panel-withTitle" aria-live="assertive" role="dialog" aria-modal="true" aria-describedby="i199c7fc0-f92e-11ea-a40d-395bfe9dc89a" style="top: 97px; left: 255.583px; z-index: 2000;" id="reportPopover">
          <div class="euiPopover__panelArrow euiPopover__panelArrow--bottom" style="left: 15.9417px; top: 0px;">
        </div>
          <div>
             <div class="euiContextMenu" data-test-subj="shareContextMenu" style="height: ${popoverHeight}; width: 235px;">
                <div class="euiContextMenuPanel euiContextMenu__panel" tabindex="0">
                   <div class="euiPopoverTitle">
                      <span class="euiContextMenu__itemLayout">
                      Generate report
                      </span>
                   </div>
                   <div>
                    <span class="euiContextMenuItem__text" style="padding-left: 10px; padding-right: 10px; margin-top: 10px; box-decoration-break: clone; display: inline-block;">
                      ${message}
                    </span>
                   </div>
                   <div>
                      <div>
                         <${button} class="${buttonClass}" type="button" data-test-subj="downloadPanel-GeneratePDF" id="generatePDF">
                            <span class="euiContextMenu__itemLayout">
                              <svg id="reports-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="euiIcon euiIcon--medium euiIcon-isLoaded euiContextMenu__icon">
                                  <g transform="translate(1.000000, 0.000000)" fill="currentColor">
                                    <path d="M9.8,0 L1,0 C0.448,0 0,0.448 0,1 L0,15 C0,15.552 0.448,16 1,16 L13,16 C13.552,16 14,15.552 14,15 L14,4.429 C14,4.173 13.902,3.926 13.726,3.74 L10.526,0.312 C10.337,0.113 10.074,0 9.8,0 M9,1 L9,4.5 C9,4.776 9.224,5 9.5,5 L9.5,5 L13,5 L13,15 L1,15 L1,1 L9,1 Z M11.5,13 L2.5,13 L2.5,14 L11.5,14 L11.5,13 Z M10.8553858,6.66036578 L7.924,9.827 L5.42565136,8.13939866 L2.63423628,11.1343544 L3.36576372,11.8161664 L5.574,9.446 L8.07559521,11.1358573 L11.5892757,7.33963422 L10.8553858,6.66036578 Z M7.5,4 L2.5,4 L2.5,5 L7.5,5 L7.5,4 Z M7.5,2 L2.5,2 L2.5,3 L7.5,3 L7.5,2 Z"></path>
                                  </g>
                              </svg>
                               <span class="euiContextMenuItem__text">Download PDF</span>
                               </svg>
                            </span>
                         </button>
                         <${button} class="${buttonClass}" type="button" data-test-subj="downloadPanel-GeneratePNG" id="generatePNG">
                            <span class="euiContextMenu__itemLayout">
                              <svg id="reports-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="euiIcon euiIcon--medium euiIcon-isLoaded euiContextMenu__icon">
                                <g transform="translate(1.000000, 0.000000)" fill="currentColor">
                                  <path d="M9.8,0 L1,0 C0.448,0 0,0.448 0,1 L0,15 C0,15.552 0.448,16 1,16 L13,16 C13.552,16 14,15.552 14,15 L14,4.429 C14,4.173 13.902,3.926 13.726,3.74 L10.526,0.312 C10.337,0.113 10.074,0 9.8,0 M9,1 L9,4.5 C9,4.776 9.224,5 9.5,5 L9.5,5 L13,5 L13,15 L1,15 L1,1 L9,1 Z M11.5,13 L2.5,13 L2.5,14 L11.5,14 L11.5,13 Z M10.8553858,6.66036578 L7.924,9.827 L5.42565136,8.13939866 L2.63423628,11.1343544 L3.36576372,11.8161664 L5.574,9.446 L8.07559521,11.1358573 L11.5892757,7.33963422 L10.8553858,6.66036578 Z M7.5,4 L2.5,4 L2.5,5 L7.5,5 L7.5,4 Z M7.5,2 L2.5,2 L2.5,3 L7.5,3 L7.5,2 Z"></path>
                                </g>
                              </svg>
                               <span class="euiContextMenuItem__text">Download PNG</span>
                            </span>
                         </button>
                      </div>
                   </div>
                   <div hidden class="euiPopoverTitle">
                    <span class="euiContextMenu__itemLayout">
                      Report definition
                    </span>
                  </div>
                  <div hidden>
                    <${button} class="${buttonClass}" type="button" data-test-subj="downloadPanel-GeneratePDF" id="createReportDefinition">
                      <span class="euiContextMenu__itemLayout">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="euiIcon euiIcon--medium euiIcon-isLoaded euiContextMenu__icon" focusable="false" role="img" aria-hidden="true"><path d="M14 4v-.994C14 2.45 13.55 2 12.994 2H11v1h-1V2H6v1H5V2H3.006C2.45 2 2 2.45 2 3.006v9.988C2 13.55 2.45 14 3.006 14h9.988C13.55 14 14 13.55 14 12.994V5H2V4h12zm-3-3h1.994C14.102 1 15 1.897 15 3.006v9.988A2.005 2.005 0 0112.994 15H3.006A2.005 2.005 0 011 12.994V3.006C1 1.898 1.897 1 3.006 1H5V0h1v1h4V0h1v1zM4 7h2v1H4V7zm3 0h2v1H7V7zm3 0h2v1h-2V7zM4 9h2v1H4V9zm3 0h2v1H7V9zm3 0h2v1h-2V9zm-6 2h2v1H4v-1zm3 0h2v1H7v-1zm3 0h2v1h-2v-1z" fill-rule="evenodd"></path></svg>
                        <span class="euiContextMenuItem__text">Create report definition</span>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div data-focus-guard="true" tabindex="-1" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"></div>
    `;
}; // TODO: merge this function and popoverMenu() into one

const popoverMenuDiscover = savedObjectAvailable => {
  const buttonClass = savedObjectAvailable ? 'euiContextMenuItem' : 'euiContextMenuItem euiContextMenuItem-isDisabled';
  const button = savedObjectAvailable ? 'button' : 'button disabled';
  const popoverHeight = savedObjectAvailable ? '171px' : '141px';
  const message = savedObjectAvailable ? `Files can take a minute or two to generate depending on the size of your source data.` : `Save this search to enable CSV reports.`;
  return `
    <div>
      <div data-focus-guard="true" tabindex="-1" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;">
    </div>
      <div data-focus-guard="true" tabindex="-1" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;">
    </div>
    <div data-focus-lock-disabled="disabled">
       <div class="euiPanel euiPopover__panel euiPopover__panel--bottom euiPopover__panel-isOpen euiPopover__panel-withTitle" aria-live="assertive" role="dialog" aria-modal="true" aria-describedby="i199c7fc0-f92e-11ea-a40d-395bfe9dc89a" style="top: 97px; left: 255.583px; z-index: 2000;" id="reportPopover">
          <div class="euiPopover__panelArrow euiPopover__panelArrow--bottom" style="left: 30.9417px; top: 0px;">
        </div>
          <div>
             <div class="euiContextMenu" data-test-subj="shareContextMenu" style="height: ${popoverHeight}; width: 235px;">
                <div class="euiContextMenuPanel euiContextMenu__panel" tabindex="0">
                   <div class="euiPopoverTitle">
                      <span class="euiContextMenu__itemLayout">
                      Generate and download
                      </span>
                   </div>
                   <div>
                    <span class="euiContextMenuItem__text" style="padding-left: 10px; padding-right: 10px; margin-top: 10px; box-decoration-break: clone; display: inline-block;">
                      ${message}
                    </span>
                   </div>
                  <div>
                    <${button} class="${buttonClass}" type="button" data-test-subj="downloadPanel-GeneratePDF" id="generateCSV">
                      <span class="euiContextMenu__itemLayout">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="euiIcon euiIcon--medium euiIcon-isLoaded euiContextMenu__icon" focusable="false" role="img" aria-hidden="true"><path d="M9 9.114l1.85-1.943a.52.52 0 01.77 0c.214.228.214.6 0 .829l-1.95 2.05a1.552 1.552 0 01-2.31 0L5.41 8a.617.617 0 010-.829.52.52 0 01.77 0L8 9.082V.556C8 .249 8.224 0 8.5 0s.5.249.5.556v8.558z"></path><path d="M16 13.006V10h-1v3.006a.995.995 0 01-.994.994H3.01a.995.995 0 01-.994-.994V10h-1v3.006c0 1.1.892 1.994 1.994 1.994h10.996c1.1 0 1.994-.893 1.994-1.994z"></path></svg>
                        <span class="euiContextMenuItem__text">Generate CSV</span>
                        </svg>
                      </span>
                    </button>
                  </div>
                   <div hidden class="euiPopoverTitle">
                    <span class="euiContextMenu__itemLayout">
                      Schedule and share
                    </span>
                  </div>
                  <div hidden>
                    <${button} class="${buttonClass}" type="button" data-test-subj="downloadPanel-GeneratePDF" id="createReportDefinition">
                      <span class="euiContextMenu__itemLayout">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="euiIcon euiIcon--medium euiIcon-isLoaded euiContextMenu__icon" focusable="false" role="img" aria-hidden="true"><path d="M14 4v-.994C14 2.45 13.55 2 12.994 2H11v1h-1V2H6v1H5V2H3.006C2.45 2 2 2.45 2 3.006v9.988C2 13.55 2.45 14 3.006 14h9.988C13.55 14 14 13.55 14 12.994V5H2V4h12zm-3-3h1.994C14.102 1 15 1.897 15 3.006v9.988A2.005 2.005 0 0112.994 15H3.006A2.005 2.005 0 011 12.994V3.006C1 1.898 1.897 1 3.006 1H5V0h1v1h4V0h1v1zM4 7h2v1H4V7zm3 0h2v1H7V7zm3 0h2v1h-2V7zM4 9h2v1H4V9zm3 0h2v1H7V9zm3 0h2v1h-2V9zm-6 2h2v1H4v-1zm3 0h2v1H7v-1zm3 0h2v1h-2v-1z" fill-rule="evenodd"></path></svg>
                        <span class="euiContextMenuItem__text">Create report definition</span>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div data-focus-guard="true" tabindex="-1" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"></div>
    `;
};
const permissionsMissingOnGeneration = () => {
  return `
  <div class="euiToast euiToast--danger" id="permissionsMissingErrorToast">
  <p class="euiScreenReaderOnly">A new notification appears</p>
  <div class="euiToastHeader euiToastHeader--withBody" aria-label="Notification" data-test-subj="euiToastHeader">
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="euiIcon euiIcon--medium euiToastHeader__icon" focusable="false" role="img" aria-hidden="true">
        <path fill-rule="evenodd" d="M7.59 10.059L7.35 5.18h1.3L8.4 10.06h-.81zm.394 1.901a.61.61 0 01-.448-.186.606.606 0 01-.186-.444c0-.174.062-.323.186-.446a.614.614 0 01.448-.184c.169 0 .315.06.44.182.124.122.186.27.186.448a.6.6 0 01-.189.446.607.607 0 01-.437.184zM2 14a1 1 0 01-.878-1.479l6-11a1 1 0 011.756 0l6 11A1 1 0 0114 14H2zm0-1h12L8 2 2 13z"></path>
    </svg>
    <span class="euiToastHeader__title">Error generating report.</span>
  </div>
  <button type="button" class="euiToast__closeButton" aria-label="Dismiss toast" data-test-subj="toastCloseButton">
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="euiIcon euiIcon--medium euiIcon-isLoaded" focusable="false" role="img" aria-hidden="true">
        <path d="M7.293 8L3.146 3.854a.5.5 0 11.708-.708L8 7.293l4.146-4.147a.5.5 0 01.708.708L8.707 8l4.147 4.146a.5.5 0 01-.708.708L8 8.707l-4.146 4.147a.5.5 0 01-.708-.708L7.293 8z"></path>
    </svg>
  </button>
  <div class="euiText euiText--small euiToastBody">
    <p>Insufficient permissions. Reach out to your Kibana administrator.</p>
  </div>
  </div>
  `;
};
const reportGenerationSuccess = () => {
  return `
  <div class="euiToast euiToast--success" id="reportSuccessToast">
    <p class="euiScreenReaderOnly">A new notification appears</p>
    <div class="euiToastHeader"
    aria-label="Notification" data-test-subj="euiToastHeader">
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
      class="euiIcon euiIcon--medium euiToastHeader__icon" focusable="false"
      role="img" aria-hidden="true">
        <path fill-rule="evenodd" d="M6.5 12a.502.502 0 01-.354-.146l-4-4a.502.502 0 01.708-.708L6.5 10.793l6.646-6.647a.502.502 0 01.708.708l-7 7A.502.502 0 016.5 12"></path>
      </svg>
      <span class="euiToastHeader__title">Successfully generated report.</span>
    </div>
    <button type="button" class="euiToast__closeButton" aria-label="Dismiss toast" id="closeReportSuccessToast"
    data-test-subj="toastCloseButton">
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
      class="euiIcon euiIcon--medium" focusable="false" role="img" aria-hidden="true">
        <path d="M7.293 8L3.146 3.854a.5.5 0 11.708-.708L8 7.293l4.146-4.147a.5.5 0 01.708.708L8.707 8l4.147 4.146a.5.5 0 01-.708.708L8 8.707l-4.146 4.147a.5.5 0 01-.708-.708L7.293 8z"></path>
      </svg>
    </button>
  </div>
  `;
};
const reportGenerationFailure = (title = 'Download error', text = 'There was an error generating this report.') => {
  return `
  <div class="euiToast euiToast--danger" id="reportFailureToast">
    <p class="euiScreenReaderOnly">A new notification appears</p>
    <div class="euiToastHeader euiToastHeader--withBody"
    aria-label="Notification" data-test-subj="euiToastHeader">
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
      class="euiIcon euiIcon--medium euiToastHeader__icon" focusable="false"
      role="img" aria-hidden="true">
        <path fill-rule="evenodd" d="M7.59 10.059L7.35 5.18h1.3L8.4 10.06h-.81zm.394 1.901a.61.61 0 01-.448-.186.606.606 0 01-.186-.444c0-.174.062-.323.186-.446a.614.614 0 01.448-.184c.169 0 .315.06.44.182.124.122.186.27.186.448a.6.6 0 01-.189.446.607.607 0 01-.437.184zM2 14a1 1 0 01-.878-1.479l6-11a1 1 0 011.756 0l6 11A1 1 0 0114 14H2zm0-1h12L8 2 2 13z"></path>
      </svg>
      <span class="euiToastHeader__title">${title}</span>
    </div>
    <button type="button" class="euiToast__closeButton" aria-label="Dismiss toast" id="closeReportFailureToast"
    data-test-subj="toastCloseButton">
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
      class="euiIcon euiIcon--medium" focusable="false" role="img" aria-hidden="true">
        <path d="M7.293 8L3.146 3.854a.5.5 0 11.708-.708L8 7.293l4.146-4.147a.5.5 0 01.708.708L8.707 8l4.147 4.146a.5.5 0 01-.708.708L8 8.707l-4.146 4.147a.5.5 0 01-.708-.708L7.293 8z"></path>
      </svg>
    </button>
    <div class="euiText euiText--small euiToastBody">
      <p>${text}</p>
    </div>
  </div>
  `;
};
const reportGenerationInProgressModal = () => {
  return `
  <div class="euiOverlayMask" id="reportGenerationProgressModal">
  <div data-focus-guard="true" tabindex="0" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"></div>
  <div data-focus-guard="true" tabindex="1" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"></div>
  <div data-focus-lock-disabled="false">
     <div class="euiModal euiModal--maxWidth-default" tabindex="0" style="max-width: 350px; min-width: 300px;">
        <button class="euiButtonIcon euiButtonIcon--text euiModal__closeIcon" type="button" aria-label="Closes this modal window" id="closeReportGenerationModal">
           <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="euiIcon euiIcon--medium euiIcon-isLoaded euiButtonIcon__icon" focusable="false" role="img" aria-hidden="true">
              <path d="M7.293 8L3.146 3.854a.5.5 0 11.708-.708L8 7.293l4.146-4.147a.5.5 0 01.708.708L8.707 8l4.147 4.146a.5.5 0 01-.708.708L8 8.707l-4.146 4.147a.5.5 0 01-.708-.708L7.293 8z"></path>
           </svg>
        </button>
        <div class="euiModal__flex">
           <div class="euiModalHeader">
              <div class="euiText euiText--medium euiTitle euiTitle--medium">
                 <div class="euiTextAlign euiTextAlign--right">
                    <h2>Generating report</h2>
                 </div>
              </div>
           </div>
           <div class="euiModalBody">
              <div class="euiModalBody__overflow">
                 <div class="euiText euiText--medium">Preparing your file for download.</div>
                 <div class="euiText euiText--medium">You can close this dialog while we continue in the background.</div>
                 <div class="euiSpacer euiSpacer--l"></div>
                 <div class="euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--alignItemsCenter euiFlexGroup--justifyContentCenter euiFlexGroup--directionRow euiFlexGroup--responsive">
                    <div class="euiFlexItem euiFlexItem--flexGrowZero"><span class="euiLoadingSpinner euiLoadingSpinner--xLarge" style="min-width: 75px; min-height: 75px;"></span></div>
                 </div>
                 <div class="euiSpacer euiSpacer--l"></div>
                 <div class="euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--alignItemsFlexEnd euiFlexGroup--justifyContentFlexEnd euiFlexGroup--directionRow euiFlexGroup--responsive">
                    <div class="euiFlexItem euiFlexItem--flexGrowZero"><button class="euiButton euiButton--primary" type="button" id="closeReportGenerationModalButton"><span class="euiButton__content"><span class="euiButton__text">Close</span></span></button></div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
  <div data-focus-guard="true" tabindex="0" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;"></div>
</div>
  `;
};

/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/public/components/main/main_utils.tsx":
/*!*********************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/components/main/main_utils.tsx ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: fileFormatsUpper, humanReadableDate, extractFilename, extractFileFormat, getFileFormatPrefix, addReportsTableContent, addReportDefinitionsTableContent, removeDuplicatePdfFileFormat, readDataReportToFile, readStreamToFile, generateReportFromDefinitionId, generateReportById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileFormatsUpper", function() { return fileFormatsUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanReadableDate", function() { return humanReadableDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractFilename", function() { return extractFilename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractFileFormat", function() { return extractFileFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileFormatPrefix", function() { return getFileFormatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReportsTableContent", function() { return addReportsTableContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReportDefinitionsTableContent", function() { return addReportDefinitionsTableContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDuplicatePdfFileFormat", function() { return removeDuplicatePdfFileFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readDataReportToFile", function() { return readDataReportToFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readStreamToFile", function() { return readStreamToFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateReportFromDefinitionId", function() { return generateReportFromDefinitionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateReportById", function() { return generateReportById; });
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "../../.private-dashboards-reports/kibana-reports/node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

const fileFormatsUpper = {
  csv: 'CSV',
  pdf: 'PDF',
  png: 'PNG'
};
const humanReadableDate = date => {
  let readableDate = new Date(date);
  return readableDate.toDateString() + ' @ ' + readableDate.toLocaleTimeString();
};
const extractFilename = filename => {
  return filename.substring(0, filename.length - 4);
};
const extractFileFormat = filename => {
  const fileFormat = filename;
  return fileFormat.substring(filename.length - 3, filename.length);
};
const getFileFormatPrefix = fileFormat => {
  var fileFormatPrefix = 'data:' + fileFormat + ';base64,';
  return fileFormatPrefix;
};
const addReportsTableContent = data => {
  let reportsTableItems = [];

  for (let index = 0; index < data.length; ++index) {
    let item = data[index];
    let report = item._source;
    let reportDefinition = report.report_definition;
    let reportParams = reportDefinition.report_params;
    let trigger = reportDefinition.trigger;
    let reportsTableEntry = {
      id: item._id,
      reportName: reportParams.report_name,
      type: trigger.trigger_type,
      sender: `\u2014`,
      kibanaRecipients: `\u2014`,
      emailRecipients: `\u2014`,
      reportSource: reportParams.description,
      // display report source name
      //TODO: wrong name
      timeCreated: report.time_created,
      state: report.state,
      url: report.query_url,
      format: reportParams.core_params.report_format
    };
    reportsTableItems.push(reportsTableEntry);
  }

  return reportsTableItems;
};
const addReportDefinitionsTableContent = data => {
  let reportDefinitionsTableItems = [];

  for (let index = 0; index < data.length; ++index) {
    let item = data[index];
    let reportDefinition = item._source.report_definition;
    let reportParams = reportDefinition.report_params;
    let trigger = reportDefinition.trigger;
    let triggerParams = trigger.trigger_params;
    let reportDefinitionsTableEntry = {
      id: item._id,
      reportName: reportParams.report_name,
      type: trigger.trigger_type,
      owner: `\u2014`,
      // Todo: replace
      source: reportParams.report_source,
      baseUrl: reportParams.core_params.base_url,
      lastUpdated: reportDefinition.last_updated,
      details: trigger.trigger_type === 'On demand' ? `\u2014` : triggerParams.schedule_type,
      // e.g. recurring, cron based
      status: reportDefinition.status
    };
    reportDefinitionsTableItems.push(reportDefinitionsTableEntry);
  }

  return reportDefinitionsTableItems;
};
const removeDuplicatePdfFileFormat = filename => {
  return filename.substring(0, filename.length - 4);
};
const readDataReportToFile = async (stream, fileFormat, fileName) => {
  const blob = new Blob([stream]);
  const url = URL.createObjectURL(blob);
  let link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const readStreamToFile = async (stream, fileFormat, fileName) => {
  let link = document.createElement('a');

  if (fileName.includes('csv')) {
    readDataReportToFile(stream, fileFormat, fileName);
    return;
  }

  let fileFormatPrefix = getFileFormatPrefix(fileFormat);
  let url = fileFormatPrefix + stream;

  if (typeof link.download !== 'string') {
    window.open(url, '_blank');
    return;
  }

  link.download = fileName;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const generateReportFromDefinitionId = async (reportDefinitionId, httpClient) => {
  let status = false;
  let permissionsError = false;
  await httpClient.post(`../api/reporting/generateReport/${reportDefinitionId}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    query: {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
  }).then(async response => {
    // for emailing a report, this API response doesn't have response body
    if (response) {
      const fileFormat = extractFileFormat(response['filename']);
      const fileName = response['filename'];
      await readStreamToFile(await response['data'], fileFormat, fileName);
    }

    status = true;
  }).catch(error => {
    console.log('error on generating report:', error);

    if (error.body.statusCode === 403) {
      permissionsError = true;
    }

    status = false;
  });
  return {
    status: status,
    permissionsError: permissionsError
  };
};
const generateReportById = async (reportId, httpClient, handleSuccessToast, handleErrorToast, handlePermissionsMissingToast) => {
  await httpClient.get(`../api/reporting/generateReport/${reportId}`, {
    query: {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
  }).then(async response => {
    //TODO: duplicate code, extract to be a function that can reuse. e.g. handleResponse(response)
    const fileFormat = extractFileFormat(response['filename']);
    const fileName = response['filename'];
    await readStreamToFile(await response['data'], fileFormat, fileName);
    handleSuccessToast();
    return response;
  }).catch(error => {
    console.log('error on generating report by id:', error);

    if (error.body.statusCode === 403) {
      handlePermissionsMissingToast();
    } else if (error.body.statusCode === 503) {
      handleErrorToast('Error generating report.', `Timed out generating report ID ${reportId}. Try again later.`);
    } else {
      handleErrorToast();
    }
  });
};

/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/public/components/utils/utils.tsx":
/*!*****************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/components/utils/utils.tsx ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: permissionsMissingToast, permissionsMissingActions, timeRangeMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionsMissingToast", function() { return permissionsMissingToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionsMissingActions", function() { return permissionsMissingActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeRangeMatcher", function() { return timeRangeMatcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

const permissionsMissingToast = action => {
  return {
    title: 'Error ' + action,
    color: 'danger',
    iconType: 'alert',
    id: 'permissionsMissingErrorToast' + action.replace(' ', ''),
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Insufficient permissions. Reach out to your Kibana administrator.")
  };
};
const permissionsMissingActions = {
  CHANGE_SCHEDULE_STATUS: 'changing schedule status.',
  DELETE_REPORT_DEFINITION: 'deleting report definition.',
  GENERATING_REPORT: 'generating report.',
  LOADING_REPORTS_TABLE: 'loading reports table.',
  LOADING_DEFINITIONS_TABLE: 'loading report definitions table.',
  VIEWING_EDIT_PAGE: 'viewing edit page.',
  UPDATING_DEFINITION: 'updating report definition',
  CREATING_REPORT_DEFINITION: 'creating new report definition.'
};
const timeRangeMatcher = /time:\(from:(.+?),to:(.+?)\)/;

/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/public/index.scss":
/*!*************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/index.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./index.scss?v7dark */ "../../.private-dashboards-reports/kibana-reports/public/index.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./index.scss?v7light */ "../../.private-dashboards-reports/kibana-reports/public/index.scss?v7light");

  case 'v8dark':
    console.error(new Error("SASS files in [opendistro_kibana_reports] were not built for theme [v8dark]. Styles were compiled using the [v7dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v7dark,v7light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v8dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./index.scss?v7dark */ "../../.private-dashboards-reports/kibana-reports/public/index.scss?v7dark")

  case 'v8light':
    console.error(new Error("SASS files in [opendistro_kibana_reports] were not built for theme [v8light]. Styles were compiled using the [v7light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v7dark,v7light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v8light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./index.scss?v7light */ "../../.private-dashboards-reports/kibana-reports/public/index.scss?v7light")
}

/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/public/index.scss?v7dark":
/*!********************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/index.scss?v7dark ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../node_modules/resolve-url-loader??ref--6-oneOf-0-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./index.scss?v7dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/resolve-url-loader/index.js?!../../node_modules/sass-loader/dist/cjs.js?!../../.private-dashboards-reports/kibana-reports/public/index.scss?v7dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/public/index.scss?v7light":
/*!*********************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/index.scss?v7light ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/resolve-url-loader??ref--6-oneOf-1-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./index.scss?v7light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/resolve-url-loader/index.js?!../../node_modules/sass-loader/dist/cjs.js?!../../.private-dashboards-reports/kibana-reports/public/index.scss?v7light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/public/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: plugin, OpendistroKibanaReportsPluginSetup, OpendistroKibanaReportsPluginStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../../.private-dashboards-reports/kibana-reports/public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ "../../.private-dashboards-reports/kibana-reports/public/plugin.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "../../.private-dashboards-reports/kibana-reports/public/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpendistroKibanaReportsPluginSetup", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["OpendistroKibanaReportsPluginSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpendistroKibanaReportsPluginStart", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["OpendistroKibanaReportsPluginStart"]; });

/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

 // This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.

function plugin() {
  return new _plugin__WEBPACK_IMPORTED_MODULE_1__["OpendistroKibanaReportsPlugin"]();
}


/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/public/plugin.ts":
/*!************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/plugin.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: OpendistroKibanaReportsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpendistroKibanaReportsPlugin", function() { return OpendistroKibanaReportsPlugin; });
/* harmony import */ var _components_context_menu_context_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/context_menu/context_menu */ "../../.private-dashboards-reports/kibana-reports/public/components/context_menu/context_menu.js");
/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

class OpendistroKibanaReportsPlugin {
  setup(core) {
    // Register an application into the side navigation menu
    // core.application.register({
    //   id: PLUGIN_NAME,
    //   title: 'Reporting',
    //   category: {
    //     id: 'odfe',
    //     label: 'Open Distro for Elasticsearch',
    //     order: 2000,
    //   },
    //   order: 2000,
    //   async mount(params: AppMountParameters) {
    //     // Load application bundle
    //     const { renderApp } = await import('./application');
    //     // Get start services as specified in kibana.json
    //     const [coreStart, depsStart] = await core.getStartServices();
    //     // Render the application
    //     return renderApp(
    //       coreStart,
    //       depsStart as AppPluginStartDependencies,
    //       params
    //     );
    //   },
    // });
    // Return methods that should be available to other plugins
    return {};
  }

  start(core) {
    return {};
  }

  stop() {}

}

/***/ }),

/***/ "../../.private-dashboards-reports/kibana-reports/public/types.ts":
/*!***********************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/types.ts ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/resolve-url-loader/index.js?!../../node_modules/sass-loader/dist/cjs.js?!../../.private-dashboards-reports/kibana-reports/public/index.scss?v7dark":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/resolve-url-loader??ref--6-oneOf-0-3!/local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!/local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/index.scss?v7dark ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/*\n * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\").\n * You may not use this file except in compliance with the License.\n * A copy of the License is located at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * or in the \"license\" file accompanying this file. This file is distributed\n * on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n * express or implied. See the License for the specific language governing\n * permissions and limitations under the License.\n */\n.react-mde .mde-header .mde-tabs button {\n  border-radius: 2px;\n  margin: 12px 4px 0px;\n  background-color: transparent;\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  padding: 0 16px;\n  min-height: 30px; }\n  .react-mde .mde-header .mde-tabs button.selected {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: 3px solid #006bb4; }\n  .react-mde .mde-header .mde-tabs button:first-child {\n    margin-left: 0px; }\n\n.mde-preview-content ul {\n  list-style: disc; }\n\n.mde-preview-content ol {\n  list-style: decimal; }\n", "",{"version":3,"sources":["index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;EAaE;AACF;EACE,kBAAkB;EAClB,oBAAoB;EACpB,6BAA6B;EAC7B,oCAAoC;EACpC,eAAe;EACf,eAAe;EACf,gBAAgB,EAAE;EAClB;IACE,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,gCAAgC,EAAE;EACpC;IACE,gBAAgB,EAAE;;AAEtB;EACE,gBAAgB,EAAE;;AAEpB;EACE,mBAAmB,EAAE","file":"index.scss?v7dark","sourcesContent":["/*\n * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\").\n * You may not use this file except in compliance with the License.\n * A copy of the License is located at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * or in the \"license\" file accompanying this file. This file is distributed\n * on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n * express or implied. See the License for the specific language governing\n * permissions and limitations under the License.\n */\n.react-mde .mde-header .mde-tabs button {\n  border-radius: 2px;\n  margin: 12px 4px 0px;\n  background-color: transparent;\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  padding: 0 16px;\n  min-height: 30px; }\n  .react-mde .mde-header .mde-tabs button.selected {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: 3px solid #006bb4; }\n  .react-mde .mde-header .mde-tabs button:first-child {\n    margin-left: 0px; }\n\n.mde-preview-content ul {\n  list-style: disc; }\n\n.mde-preview-content ol {\n  list-style: decimal; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/resolve-url-loader/index.js?!../../node_modules/sass-loader/dist/cjs.js?!../../.private-dashboards-reports/kibana-reports/public/index.scss?v7light":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/resolve-url-loader??ref--6-oneOf-1-3!/local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!/local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/.private-dashboards-reports/kibana-reports/public/index.scss?v7light ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/*\n * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\").\n * You may not use this file except in compliance with the License.\n * A copy of the License is located at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * or in the \"license\" file accompanying this file. This file is distributed\n * on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n * express or implied. See the License for the specific language governing\n * permissions and limitations under the License.\n */\n.react-mde .mde-header .mde-tabs button {\n  border-radius: 2px;\n  margin: 12px 4px 0px;\n  background-color: transparent;\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  padding: 0 16px;\n  min-height: 30px; }\n  .react-mde .mde-header .mde-tabs button.selected {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: 3px solid #006bb4; }\n  .react-mde .mde-header .mde-tabs button:first-child {\n    margin-left: 0px; }\n\n.mde-preview-content ul {\n  list-style: disc; }\n\n.mde-preview-content ol {\n  list-style: decimal; }\n", "",{"version":3,"sources":["index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;EAaE;AACF;EACE,kBAAkB;EAClB,oBAAoB;EACpB,6BAA6B;EAC7B,oCAAoC;EACpC,eAAe;EACf,eAAe;EACf,gBAAgB,EAAE;EAClB;IACE,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,gCAAgC,EAAE;EACpC;IACE,gBAAgB,EAAE;;AAEtB;EACE,gBAAgB,EAAE;;AAEpB;EACE,mBAAmB,EAAE","file":"index.scss?v7light","sourcesContent":["/*\n * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\").\n * You may not use this file except in compliance with the License.\n * A copy of the License is located at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * or in the \"license\" file accompanying this file. This file is distributed\n * on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n * express or implied. See the License for the specific language governing\n * permissions and limitations under the License.\n */\n.react-mde .mde-header .mde-tabs button {\n  border-radius: 2px;\n  margin: 12px 4px 0px;\n  background-color: transparent;\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  padding: 0 16px;\n  min-height: 30px; }\n  .react-mde .mde-header .mde-tabs button.selected {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: 3px solid #006bb4; }\n  .react-mde .mde-header .mde-tabs button:first-child {\n    margin-left: 0px; }\n\n.mde-preview-content ul {\n  list-style: disc; }\n\n.mde-preview-content ol {\n  list-style: decimal; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!*****************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/querystring-es3/decode.js":
/*!***************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/querystring-es3/decode.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "../../node_modules/querystring-es3/encode.js":
/*!***************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/querystring-es3/encode.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "../../node_modules/querystring-es3/index.js":
/*!**************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/querystring-es3/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "../../node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "../../node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*******************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../node_modules/url/url.js":
/*!************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/url/url.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "../../node_modules/node-libs-browser/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "../../node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "../../node_modules/url/util.js":
/*!*************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/url/util.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/*!*************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/uuid/lib/bytesToUuid.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/*!*************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/uuid/lib/rng-browser.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../../node_modules/uuid/v4.js":
/*!************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/uuid/v4.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../../node_modules/val-loader/dist/cjs.js?key=opendistro_kibana_reports!../../packages/kbn-ui-shared-deps/public_path_module_creator.js":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/node_modules/val-loader/dist/cjs.js?key=opendistro_kibana_reports!/local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/packages/kbn-ui-shared-deps/public_path_module_creator.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__kbnPublicPath__['opendistro_kibana_reports']

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../../packages/elastic-datemath/target/index.js":
/*!******************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/packages/elastic-datemath/target/index.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var unitsMap = {
  ms: {
    weight: 1,
    type: 'fixed',
    base: 1
  },
  s: {
    weight: 2,
    type: 'fixed',
    base: 1000
  },
  m: {
    weight: 3,
    type: 'mixed',
    base: 1000 * 60
  },
  h: {
    weight: 4,
    type: 'mixed',
    base: 1000 * 60 * 60
  },
  d: {
    weight: 5,
    type: 'mixed',
    base: 1000 * 60 * 60 * 24
  },
  w: {
    weight: 6,
    type: 'calendar',
    base: NaN
  },
  M: {
    weight: 7,
    type: 'calendar',
    base: NaN
  },
  // q: { weight: 8, type: 'calendar' }, // TODO: moment duration does not support quarter
  y: {
    weight: 9,
    type: 'calendar',
    base: NaN
  }
};
var units = Object.keys(unitsMap).sort(function (a, b) {
  return unitsMap[b].weight - unitsMap[a].weight;
});

var unitsDesc = _toConsumableArray(units);

var unitsAsc = _toConsumableArray(units).reverse();

var isDate = function isDate(d) {
  return Object.prototype.toString.call(d) === '[object Date]';
};

var isValidDate = function isValidDate(d) {
  return isDate(d) && !isNaN(d.valueOf());
};
/*
 * This is a simplified version of elasticsearch's date parser.
 * If you pass in a momentjs instance as the third parameter the calculation
 * will be done using this (and its locale settings) instead of the one bundled
 * with this library.
 */


function parse(text) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$roundUp = _ref.roundUp,
      roundUp = _ref$roundUp === void 0 ? false : _ref$roundUp,
      _ref$momentInstance = _ref.momentInstance,
      momentInstance = _ref$momentInstance === void 0 ? _moment.default : _ref$momentInstance,
      forceNow = _ref.forceNow;

  if (!text) return undefined;
  if (momentInstance.isMoment(text)) return text;
  if (isDate(text)) return momentInstance(text);

  if (forceNow !== undefined && !isValidDate(forceNow)) {
    throw new Error('forceNow must be a valid Date');
  }

  var time;
  var mathString = '';
  var index;
  var parseString;

  if (text.substring(0, 3) === 'now') {
    time = momentInstance(forceNow);
    mathString = text.substring('now'.length);
  } else {
    index = text.indexOf('||');

    if (index === -1) {
      parseString = text;
      mathString = ''; // nothing else
    } else {
      parseString = text.substring(0, index);
      mathString = text.substring(index + 2);
    } // We're going to just require ISO8601 timestamps, k?


    time = momentInstance(parseString);
  }

  if (!mathString.length) {
    return time;
  }

  return parseDateMath(mathString, time, roundUp);
}

function parseDateMath(mathString, time, roundUp) {
  var dateTime = time;
  var len = mathString.length;
  var i = 0;

  while (i < len) {
    var c = mathString.charAt(i++);
    var type = void 0;
    var num = void 0;
    var unit = void 0;

    if (c === '/') {
      type = 0;
    } else if (c === '+') {
      type = 1;
    } else if (c === '-') {
      type = 2;
    } else {
      return;
    }

    if (isNaN(mathString.charAt(i))) {
      num = 1;
    } else if (mathString.length === 2) {
      num = mathString.charAt(i);
    } else {
      var numFrom = i;

      while (!isNaN(mathString.charAt(i))) {
        i++;
        if (i >= len) return;
      }

      num = parseInt(mathString.substring(numFrom, i), 10);
    }

    if (type === 0) {
      // rounding is only allowed on whole, single, units (eg M or 1M, not 0.5M or 2M)
      if (num !== 1) {
        return;
      }
    }

    unit = mathString.charAt(i++); // append additional characters in the unit

    for (var j = i; j < len; j++) {
      var unitChar = mathString.charAt(i);

      if (/[a-z]/i.test(unitChar)) {
        unit += unitChar;
        i++;
      } else {
        break;
      }
    }

    if (units.indexOf(unit) === -1) {
      return;
    } else {
      if (type === 0) {
        if (roundUp) dateTime.endOf(unit);else dateTime.startOf(unit);
      } else if (type === 1) {
        dateTime.add(num, unit);
      } else if (type === 2) {
        dateTime.subtract(num, unit);
      }
    }
  }

  return dateTime;
}

var _default = {
  parse: parse,
  unitsMap: Object.freeze(unitsMap),
  units: Object.freeze(units),
  unitsAsc: Object.freeze(unitsAsc),
  unitsDesc: Object.freeze(unitsDesc)
};
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "../../packages/kbn-optimizer/target/worker/entry_point_creator.js":
/*!************************************************************************************************************************************!*\
  !*** /local/home/lijshu/projects/aos-1.0-1.1-patch/os-backport/kibana/packages/kbn-optimizer/target/worker/entry_point_creator.js ***!
  \************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_opendistro_kibana_reports_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=opendistro_kibana_reports!../../../kbn-ui-shared-deps/public_path_module_creator.js */ "../../node_modules/val-loader/dist/cjs.js?key=opendistro_kibana_reports!../../packages/kbn-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_opendistro_kibana_reports_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_opendistro_kibana_reports_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__kbnBundles__.define('plugin/opendistro_kibana_reports/public', __webpack_require__, /*require.resolve*/(/*! ../../../../plugins/kibana-reports/public */ "../../.private-dashboards-reports/kibana-reports/public/index.ts"))

/***/ }),

/***/ "jquery":
/*!*******************************************!*\
  !*** external "__kbnSharedDeps__.Jquery" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Jquery;

/***/ }),

/***/ "moment":
/*!*******************************************!*\
  !*** external "__kbnSharedDeps__.Moment" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Moment;

/***/ }),

/***/ "plugin/kibanaUtils/public":
/*!**************************************************!*\
  !*** @kbn/bundleRef "plugin/kibanaUtils/public" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/kibanaUtils/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "react":
/*!******************************************!*\
  !*** external "__kbnSharedDeps__.React" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.React;

/***/ })

/******/ });
//# sourceMappingURL=opendistro_kibana_reports.plugin.js.map