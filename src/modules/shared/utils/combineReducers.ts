export function combineReducers<State, Action, T>(
  ...reducers: [
    (state: State, action: Action) => State,
    ...(<PartialState extends State>(state: PartialState, action: any) => any)[]
  ]
): (state: State, action: Action) => State {
  return (state, action) => {
    return reducers.reduce(
      (acc, reducer) => ({
        ...acc,
        ...reducer({ ...acc }, { ...action } as any),
      }),
      { ...state }
    );
  };
}
