// 第 40 题：在 Vue 中，子组件为何不可以修改父组件传递的 Prop，如果修改了，Vue 是如何监控到属性的修改并给出警告的。

  /* 
    因为Vue采用的是 单向数据流 出现了错误可以更加快速的定位到数据的位置 如子组件数据发生错误 可以找到父组件进行校验
  */
if (process.env.NODE_ENV !== 'production') {
  var hyphenatedKey = hyphenate(key);
  if (isReservedAttribute(hyphenatedKey) ||
      config.isReservedAttr(hyphenatedKey)) {
    warn(
      ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
      vm
    );
  }
  defineReactive$$1(props, key, value, function () {
    if (!isRoot && !isUpdatingChildComponent) { // 不是根组件 同时 不是该组件正在修改 就只有子组件在修改属性
      warn(
        "Avoid mutating a prop directly since the value will be " +
        "overwritten whenever the parent component re-renders. " +
        "Instead, use a data or computed property based on the prop's " +
        "value. Prop being mutated: \"" + key + "\"",
        vm
      );
    }
  });
}

/* 
  在initProps的时候，在defineReactive时通过判断是否在开发环境，
  如果是开发环境，会在触发set的时候判断是否此key是否处于updatingChildren中被修改，
  如果不是，说明此修改来自子组件，触发warning提示。

  需要特别注意的是，当你从子组件修改的prop属于基础类型时会触发提示。 这种情况下，你是无法修改父组件的数据源的， 因为基础类型赋值时是值拷贝。
  你直接将另一个非基础类型（Object, array）赋值到此key时也会触发提示(但实际上不会影响父组件的数据源)，这里是修改引用 不会改变父组件数据
   当你修改object的属性时不会触发提示，并且会修改父组件数据源的数据。 这里是修改传入对象的属性 会引起父组件的改变
*/