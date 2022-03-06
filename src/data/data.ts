interface DataButtons {
  id: number;
  type: 'primary' | 'secondary';
  disabled: boolean;
  icon?: 'arrow-right' | 'check' | 'refresh';
  child?: string;
  isLoading?: boolean;
  onHandleFunction?: () => void;
  width?: 'full' | undefined;
}

const waveToScreen = () => {
  alert('Can you wave to the Screen?')
}

export const vetData: DataButtons[] = [
  { id: 0, type: 'primary', disabled: false, icon: 'refresh', child: 'Button 1' },
  { id: 1, type: 'secondary', disabled: false, icon: 'check', child: 'Button 2' },
  { id: 2, type: 'primary', disabled: false, icon: 'arrow-right', child: 'Button 3', onHandleFunction: waveToScreen },
  { id: 3, type: 'secondary', disabled: false, child: 'Button 4' },
  { id: 4, type: 'primary', disabled: false },
  { id: 5, type: 'primary', disabled: true, child: 'Button 5', width: 'full' },
  { id: 6, type: 'secondary', disabled: false, icon: 'arrow-right', child: 'Button 6', isLoading: true, onHandleFunction: waveToScreen, width: 'full' },
]