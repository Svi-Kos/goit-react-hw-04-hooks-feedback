import { useState } from 'react';
import './App.css';
import SectionFeedbackWidget from './components/FeedbackWidget/SectionFeedbackWidget';
import FeedbackOptions from '../src/components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import statOptions from '../src/statOptions.json';
import Notification from 'components/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [visible, setVisible] = useState(false);

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const showStatistics = () => {
    setVisible(true);
  };

  return (
    <>
      <SectionFeedbackWidget title="Please leave feedback">
        <FeedbackOptions
          options={statOptions}
          onLeaveFeedback={onLeaveFeedback}
          showStatistics={showStatistics}
        />
        {!visible && <Notification message="No feedback given"></Notification>}

        {visible && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </SectionFeedbackWidget>
    </>
  );
}

export default App;

// const [state, setState] = useState({
//   good: 0,
//   neutral: 0,
//   bad: 0,
// });
// const onLeaveFeedback = option => {
// setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
// }
