import { motion } from 'framer-motion';
import { Trophy, Star, Award, Github, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'StarkSeek Hackathon',
      subtitle: 'Finalist',
      description: 'Reached the final round in a competitive hackathon showcasing innovative problem-solving skills.',
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      category: 'Competition'
    },
    {
      title: 'CodeSpark Build Challenge',
      subtitle: 'Runner-up',
      description: 'Secured second place in a coding challenge demonstrating technical expertise and creativity.',
      icon: <Award className="h-6 w-6 text-blue-500" />,
      category: 'Coding Challenge'
    },
    {
      title: 'GitHub Contributions',
      subtitle: 'Active Developer',
      description: 'Consistent contributions to open-source projects and personal repositories.',
      icon: <Github className="h-6 w-6 text-gray-800 dark:text-white" />,
      category: 'Open Source'
    },
    {
      title: 'Academic Excellence',
      subtitle: 'Consistent Performance',
      description: 'Maintained strong academic performance throughout engineering studies.',
      icon: <Star className="h-6 w-6 text-purple-500" />,
      category: 'Education'
    }
  ];

  const githubStats = [
    { label: 'Repositories', value: '15+', color: 'from-blue-500 to-cyan-500' },
    { label: 'Contributions', value: '100+', color: 'from-green-500 to-emerald-500' },
    { label: 'Stars Earned', value: '25+', color: 'from-yellow-500 to-orange-500' },
    { label: 'Forks Created', value: '8+', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Celebrating milestones, competition wins, and contributions to the developer community
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Shark Image & GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Shark Image */}
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src="/images/shark-achievement.svg" 
                  alt="Shark Developer Mascot" 
                  className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                />
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  🚀 Live
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3 italic">
                "Diving deep into code, one project at a time!"
              </p>
            </div>

            {/* GitHub Statistics */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center mb-6">GitHub Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                {githubStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg bg-gradient-to-br from-background/50 to-background/20 backdrop-blur-sm border border-white/10"
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* GitHub Profile Link */}
              <div className="text-center pt-4">
                <a
                  href="https://github.com/abhisek-raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Github className="h-5 w-5" />
                  View GitHub Profile
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Achievements List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full font-medium">
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-primary mb-2">
                      {achievement.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to Achieve More?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate on innovative projects and create something amazing together.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Let's Connect
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
