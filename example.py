import discord 						# << We need to import the ingredients to build our cake.
from discord.ext import commands	

class ExampleCommand:	
    """This is an example command!"""	# << Info, for reference

    def __init__(self, bot):	# << Initialization
        self.bot = bot

    @commands.command()
    async def hello(self):	# << This is the actual command, or input
        """This command will output a hello message.""" # << Info

        await self.bot.say("Hi there!")	# << This is the output

def setup(bot):
    bot.add_cog(ExampleCommand(bot))	
