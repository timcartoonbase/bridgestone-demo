const riveCanvas = document.getElementById("riveCanvas");
let r;

r = new rive.Rive({
  src: "assets/bridgestone_260306.riv",
  canvas: riveCanvas,
  layout: new rive.Layout({ fit: rive.Fit.Cover }),
  stateMachines: ["State Machine 1"],
  autoplay: true,
  autobind: false,
  artboard: "Artboard",
  fitCanvasToArtboardWidth: true,
  fitCanvasToArtboardHeight: true,
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
    window.riveInputs = r.stateMachineInputs("State Machine 1");

    const viewModel = r.viewModelByName("ViewModel1");
    const vmi = viewModel.instanceByName("Instance");
    r.bindViewModelInstance(vmi);
    console.log(vmi);

    // Strings
    const textBox1 = vmi.number("activeArea");
    textBox1.value = 0; //Increment to activate areas. Set to 0 to activate home screen.
  },
});

window.addEventListener("resize", () => {
  r.resizeDrawingSurfaceToCanvas();
});
