# task-a: adding an item to the list

- test adding a new item to the list.
- Include testing of error states.
- It should be possible to follow the document to manually test the
  application.

## 1. Initial Verification

### 1.1. Steps to Perform

1. Select textbox under title by mouse click.
2. type the string `Nicolas Jaar - "Mud"`
3. Hit Enter or click Add Item
4. Complete

### 1.2. Expected Results

1. `Loading...` should appear on screen briefly along with a grey boxed version of the new item
2. `Loading...` disappears
3. The new item should appear in the list

### 1.3. Actual Results

1. `Loading...` should appear on screen briefly along with a grey boxed version of the new item (OK)
2. `Loading...` disappears (OK)
3. The new item appeared in the list (OK)

### 1.4. Environment

Description of the environment used to perform the test. Environment should include at minimum:

- OS: Windows 10, Version: 20H2 19042.928
- Browser: Firefox 88, UA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0"
- Window Size: 1599x937
- Additional relevant info

## 2. Test fewer than 10 characters

### 2.1. Steps to Perform

1. Select textbox under title by mouse click.
2. type the string `M83 - "*"`
3. Hit Enter click Add Item
4. Complete

### 2.2. Expected Results

1. `Loading...` should appear on screen briefly along with a grey boxed version of the new item
2. `Loading...` disappears
3. The new item should not appear in the list
4. Item is not added

### 2.3. Actual Results

1. `Loading...` should appear on screen briefly along with a grey boxed version of the new item (OK)
2. `Loading...` disappears (OK)
3. Red Error box with message: `Title must be at least 10 characters.` (OK)
4. Item is not added. (OK)

### 2.4. Environment

Same as 1.4 above.

## 3. Test more than 20 characters

### 3.1 Steps to Perform

1. Select textbox under title by mouse click.
2. type the string `Great Lake Swimmers - "Three Days at Sea (Lost Swimmers)"`
3. Hit Enter or click Add Item
4. Complete

### 3.2 Expected Results

1. `Loading...` should appear on screen briefly along with a grey boxed version of the new item
2. `Loading...` disappears
3. The new item should not appear in the list
4. Item is not added

### 3.3. Actual Results

1. Grey boxed Loading... should appear on screen briefly (OK)
2. `Loading...` disappears (OK)
3. Red Error box with message: `Title can be at most 20 characters.` (OK)
4. Item is not added. (OK)

### 3.4. Environment

Same as 1.4 above.

## TODO

A non exhaustive list of other possible test cases that may elicit issues:

- unicode
- double-wide characters, e.g., ß
- emoji
- pasting non-text
- pasting huge text
- ...

