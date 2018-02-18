/*
emitter = new Emitter();

// 1. Support subscribing to events.
sub = emitter.subscribe('event_name', callback);
sub2 = emitter.subscribe('event_name', callback2);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', foo, bar);

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above

*/



class Emiter {
  constructor() {
    this.fns = {};
    this.idCounter = 1;
  }

  subscribe(emitername, cb) {
    var fns = this.fns;
    if(!fns[emitername]) {
      fns[emitername] = [];
    }
    var event = {
      cb: cb,
      id: this.idCounter++
    };
    fns[emitername].push(event);
    return {
      release: function () {
        var i = fns[emitername].indexOf(event);
        if(i !== -1) {
          fns[emitername].splice(i, 1);
          return true;
        }
        return false;
      }
    }
  }


  emit(event_name) {
    var parameters  = Array.from(arguments).slice(1);
    if(this.fns[event_name]) {
      this.fns[event_name].forEach(function (event) {
        event.cb.apply({}, parameters);
      });
    }
  }
}


let emitter = new Emiter();
let sub = emitter.subscribe('event_name', console.log);
emitter.emit('event_name', 1, 2);
sub.release();
