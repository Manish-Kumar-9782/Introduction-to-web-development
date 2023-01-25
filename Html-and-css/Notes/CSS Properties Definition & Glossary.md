# CSS Properties Definitions

## Box Model

### CSS Basic Box Model

When laying out a document, the browser's rendering engine represents each element as a rectangular box according to the standard **CSS basic box model** . CSS determines the size, position, and properties (color, background, border size, etc.) of these boxes.

Every box is composed of four parts (or _areas_ ), defined by their respective edges: the _content edge_ , _padding edge_ , _border edge_ , and _margin edge_ .

#### Content Area

The **content area** , bounded by the content edge, contains the "real" content of the element, such as text, an image, or a video player. Its dimensions are the _content width_ (or _content-box width_ ) and the _content height_ (or _content-box height_ ). It often has a background color or background image.

If the [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) property is set to `content-box` (default) and if the element is a block element, the content area's size can be explicitly defined with the [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width), [`min-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width), [`max-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width), [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height), [`min-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height), and [`max-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height) properties.

#### Padding Area

The **padding area** , bounded by the padding edge, extends the content area to include the element's padding. Its dimensions are the _padding-box width_ and the _padding-box height_ .

The thickness of the padding is determined by the [`padding-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top), [`padding-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right), [`padding-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom), [`padding-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left), and shorthand [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) properties.

#### Border Area

The **border area** , bounded by the border edge, extends the padding area to include the element's borders. Its dimensions are the _border-box width_ and the _border-box height_ .

The thickness of the borders are determined by the [`border-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width) and shorthand [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border) properties. If the [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) property is set to `border-box`, the border area's size can be explicitly defined with the [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width), [`min-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width), [`max-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width), [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height), [`min-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height), and [`max-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height) properties. When there is a background ([`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) or [`background-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)) set on a box, it extends to the outer edge of the border (i.e. extends underneath the border in z-ordering). This default behavior can be altered with the [`background-clip`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) CSS property.

#### Margin Area

The **margin area** , bounded by the margin edge, extends the border area to include an empty area used to separate the element from its neighbors. Its dimensions are the _margin-box width_ and the _margin-box height_ .

The size of the margin area is determined by the [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top), [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right), [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom), [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left), and shorthand [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) properties. When [margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) occurs, the margin area is not clearly defined since margins are shared between boxes.

Finally, note that for non-replaced inline elements, the amount of space taken up (the contribution to the height of the line) is determined by the [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) property, even though the borders and padding are still displayed around the content

## Box Sizing

The **`box-sizing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how the total width and height of an element is calculated.

By default in the [CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), the `width` and `height` you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the `width` and `height` to arrive at the size of the box that's rendered on the screen. This means that when you set `width` and `height`, you have to adjust the value you give to allow for any border or padding that may be added. For example, if you have four boxes with `width: 25%;`, if any has left or right padding or a left or right border, they will not by default fit on one line within the constraints of the parent container.

The `box-sizing` property can be used to adjust this behavior:

- `content-box` gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.

* `border-box` tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements. `box-sizing: border-box` is the default styling that browsers use for the [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table), [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), and [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) elements, and for [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) elements whose type is <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio">radio </a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">checkbox </a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset">reset </a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button">button </a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit">submit </a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color">color </a>, or <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search">search </a>.

**Content Box**

This is the initial and default value as specified by the CSS standard. The [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties include the content, but does not include the padding, border, or margin. For example, `.box {width: 350px; border: 10px solid black;}` renders a box that is 370px wide.

Here, the dimensions of the element are calculated as: _width = width of the content_ , and _height = height of the content_ . (Borders and padding are not included in the calculation.)

**Border Box**

The [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties include the content, padding, and border, but do not include the margin. Note that padding and border will be inside of the box. For example, `.box {width: 350px; border: 10px solid black;}` renders a box that is 350px wide, with the area for content being 330px wide. The content box can't be negative and is floored to 0, making it impossible to use `border-box` to make the element disappear.

Here the dimensions of the element are calculated as: _width = border + padding + width of the content_ , and _height = border + padding + height of the content_ .
