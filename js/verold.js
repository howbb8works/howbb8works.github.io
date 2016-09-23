/**
 *
 * Component
 *
 * All components will have access to the following variables in their scope:
 *
 *   VAPI - the Verold API
 *   require - requirejs
 *   THREE - THREE.JS
 *   _ - underscore.js
 *
 * All components will have the following properties assigned to them:
 *
 *   this.getEntity() - the VeroldEntity which this component is attached to
 *   this.getEvents() - global event system (bind events with .on()/.off() and trigger events with .trigger())
 *   this.getThreeObject() - returns the Three.JS object associated with this component (e.g. THREE.Object3D )
 *   this.getThreeScene() - returns the Three.JS scene that this component's entity is a part of.
 *   this.getThreeRenderer() - returns the Three.JS renderer currently being used by the engine.
 *   this.getAssetRegistry() - returns the Verold asset registry for this project.
 *
 * All of your component attributes will automatically be bound to your object,
 * you can access them via this.[attribute name].
 *
 * Alternatively, you can load in your own versions of these dependencies by
 * adding them as external dependencies for this script.
 *
 * Additional information regarding the Verold API can be found in our API docs:
 *
 *  http://assets.verold.com/doc/index.html
 */

/* global VAPI */

/**
 * A custom component class.
 *
 * @class Component
 */
function Component() {
}

/*global VAPI*/
Component.prototype = new VAPI.VeroldComponent();

/**
 * Called as soon as the VeroldEntity begins to load.
 */
Component.prototype.init = function() {
  // this.veroldEntity is available here but the Three.JS data isn't loaded yet
};


/**
 * Called once the Three.JS data for this object is available
 */


Component.prototype.sceneLoaded = function() {
  $('#load-scene').remove();
  $('.controls3d').show();
};

Component.prototype.objectCreated = function() {
  // this.getThreeData() is available
};

/**
 * Called per VeroldEngine update (once per frame)
 * @param  {float} delta The number of seconds since the last call to `update`
 */
Component.prototype.update = function(delta) {
  var threeData;
  // since update can be called before the Three.JS data is present, you should always
  // check for its existence before making use of it
  if (this.hasThreeData()) {
    // It is safe to manipulate threeData now.
    threeData = this.getThreeData();
  }
};

/**
 * Called when the VeroldEntity is unloaded or this component is removed
 */
Component.prototype.shutdown = function() {
  // make sure to clean up any events or other bindings that you have created
  // to avoid memory leaks
};

// =========================================================
// Life Cycle Events
// =========================================================
// preInit() - called as soon as the component is created. Note that the VeroldEntity hasn't been loaded yet and attribute values are not yet available.
// init() - called when the load of the VeroldEntity (that this component is attached to) has started. Attribute values are available and all VeroldEntities in the project are created
// shutdown() - called when the VeroldEntity is being unloaded
//
// The 'update' events are called every frame, followed by the 'render' events
// Each is passed 'delta' which is the time elapsed since the last frame, in seconds. i.e. at 60 fps, delta would be approximately 0.017 seconds.

// update( delta ) - main update. The should be used for updating application/game logic. 
// preUpdate(delta) - called immediately before all component 'update' functions are called.
// postUpdate(delta) - called immediately after all component 'update' functions are called.

// render(delta) - called once per frame, just after updates. This function can be used for any custom Three.JS rendering that you want to do. Note that if you want to access the current camera/scene being used to render by the engine, you may want to consider using pre/postRenderView instead (See below).
// preRender(delta) - called immediately before all component 'render' functions are called.
// postRender(delta) - called immediately after all component 'render' functions are called.

// These functions are triggered for each active camera in a scene (and so are potentially called multiple times a frame). You can use them to do custom pre/post passes. 'options' contains information about the render being done including viewport and clearing information.
// preRenderView( scene, camera, options ) - called just before a camera's view is rendered
// for a scene.
// postRenderView( scene, camera, options ) - called just after a camera's view is rendered
// for a scene.
//
// suspend() - called when application loses focus
// resume() - called when application regains focus
//
// objectCreated() - called when the VeroldEntity's Three.JS data is available (e.g. THREE.Object3D, THREE.Mesh, etc.)
// objectLoaded() - called when the Three.JS data is completely loaded,
//                  including it's children and dependencies (e.g. textures and materials)
// sceneLoaded() - called when the scene is fully loaded

return Component;