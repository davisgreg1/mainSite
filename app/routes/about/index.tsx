import { LinksFunction, MetaFunction, Link } from 'remix'
import Typist from 'react-typist'
import styles from '~/styles/about.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap'
    }
  ]
}

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: `About - Greg | FullStack Developer`,
    description: `About Greg`
  }
}

const About = () => {
  const cursorOptions = {
    show: false,
    blink: true,
    element: '_',
    hideWhenDone: true,
    hideWhenDoneDelay: 1000
  }

  const labels = ['Front End', 'Back End', 'React JS', 'Design']

  const data = {
    labels,
    datasets: [
      {
        label: 'Rating',
        data: [87, 79, 88, 60, 100],
        borderColor: 'rgba(15, 120, 181)',
        backgroundColor: 'rgba(15, 120, 181,0.2)'
      }
    ]
  }

  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      },
      title: {
        display: true,
        text: 'About Me'
      }
    }
  }
  return (
    <div className='container'>
      <div className='content'>
        <div className='skill-bar-container'>
          <Bar options={options} data={data} datasetIdKey={'abks'} />
        </div>
        <div className='skill-text-container'>
          <Typist cursor={cursorOptions}>
            I'm a software engineer with a passion for building products that
            are:
            <Typist.Delay ms={500} /> accessible,
            <Typist.Delay ms={500} /> performant,
            <Typist.Delay ms={500} /> intuitive, 
            {" "} and
            <Typist.Delay ms={500} /> user-friendly.
          </Typist>
        </div>
      </div>
    </div>
  )
}

export default About
