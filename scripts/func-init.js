 // receiving input when performing mouse activity

    // Initiate canvas function when clicking corresponding button on canvas
    // currentFunction = new Pencil(contextReal, contextDraft);
    $('span#pencil').addClass('active');

    // Initialize bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip()

    $('span#pencil').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new Pencil(contextReal, contextDraft);
    });
    $('span#eraser').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new Eraser(contextReal, contextDraft);
    });
    $('span#line').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new Line(contextReal, contextDraft);
    });
    $('span#text').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new Text(contextReal, contextDraft);
    });
    $('span#rectangle').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new Rectangle(contextReal, contextDraft);
    });
    $('span#rectangle-fill').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new RectangleFill(contextReal, contextDraft);
    });
    $('span#circle').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new Circle(contextReal, contextDraft);
    });
    $('span#circle-fill').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new CircleFill(contextReal, contextDraft);
    });
    $('span#polygon').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new Polygon(contextReal, contextDraft);
    });
    $('span#polygon-fill').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new PolygonFill(contextReal, contextDraft);
    });
    $('#img-fill').click(() => {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new ImageFill(contextReal, contextDraft, deImage);
    });
    $('#bucket').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new Bucket(contextReal, contextDraft);
    });
    $('#eyedropper').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new Eyedropper(contextReal, contextDraft);
    });
    $('#brush-type1').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new BrushType1(contextReal, contextDraft);
    });
    $('#brush-type2').on('click', function () {
      $('.tools').removeClass('active');
      $(this).addClass('active');
      currentFunction = new BrushType2(contextReal, contextDraft);
    });
    $('#reset').on('click', function () {
      oldFunction = currentFunction;
      currentFunction = new Reset(contextReal, contextDraft);
      currentFunction = oldFunction;
    });