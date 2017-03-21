'use strict';

define('ace/snippets/perl', ['require', 'exports', 'module'], function (require, exports, module) {

	exports.snippetText = '# #!/usr/bin/perl\nsnippet #!\n\t#!/usr/bin/env perl\n\n# Hash Pointer\nsnippet .\n\t =>\n# Function\nsnippet sub\n\tsub ${1:function_name} {\n\t\t${2:#body ...}\n\t}\n# Conditional\nsnippet if\n\tif (${1}) {\n\t\t${2:# body...}\n\t}\n# Conditional if..else\nsnippet ife\n\tif (${1}) {\n\t\t${2:# body...}\n\t}\n\telse {\n\t\t${3:# else...}\n\t}\n# Conditional if..elsif..else\nsnippet ifee\n\tif (${1}) {\n\t\t${2:# body...}\n\t}\n\telsif (${3}) {\n\t\t${4:# elsif...}\n\t}\n\telse {\n\t\t${5:# else...}\n\t}\n# Conditional One-line\nsnippet xif\n\t${1:expression} if ${2:condition};${3}\n# Unless conditional\nsnippet unless\n\tunless (${1}) {\n\t\t${2:# body...}\n\t}\n# Unless conditional One-line\nsnippet xunless\n\t${1:expression} unless ${2:condition};${3}\n# Try/Except\nsnippet eval\n\tlocal $@;\n\teval {\n\t\t${1:# do something risky...}\n\t};\n\tif (my $e = $@) {\n\t\t${2:# handle failure...}\n\t}\n# While Loop\nsnippet wh\n\twhile (${1}) {\n\t\t${2:# body...}\n\t}\n# While Loop One-line\nsnippet xwh\n\t${1:expression} while ${2:condition};${3}\n# C-style For Loop\nsnippet cfor\n\tfor (my $${2:var} = 0; $$2 < ${1:count}; $$2${3:++}) {\n\t\t${4:# body...}\n\t}\n# For loop one-line\nsnippet xfor\n\t${1:expression} for @${2:array};${3}\n# Foreach Loop\nsnippet for\n\tforeach my $${1:x} (@${2:array}) {\n\t\t${3:# body...}\n\t}\n# Foreach Loop One-line\nsnippet fore\n\t${1:expression} foreach @${2:array};${3}\n# Package\nsnippet package\n\tpackage ${1:`substitute(Filename(\'\', \'Page Title\'), \'^.\', \'\\u&\', \'\')`};\n\n\t${2}\n\n\t1;\n\n\t__END__\n# Package syntax perl >= 5.14\nsnippet packagev514\n\tpackage ${1:`substitute(Filename(\'\', \'Page Title\'), \'^.\', \'\\u&\', \'\')`} ${2:0.99};\n\n\t${3}\n\n\t1;\n\n\t__END__\n#moose\nsnippet moose\n\tuse Moose;\n\tuse namespace::autoclean;\n\t${1:#}BEGIN {extends \'${2:ParentClass}\'};\n\n\t${3}\n# parent\nsnippet parent\n\tuse parent qw(${1:Parent Class});\n# Read File\nsnippet slurp\n\tmy $${1:var} = do { local $/; open my $file, \'<\', "${2:file}"; <$file> };\n\t${3}\n# strict warnings\nsnippet strwar\n\tuse strict;\n\tuse warnings;\n# older versioning with perlcritic bypass\nsnippet vers\n\t## no critic\n\tour $VERSION = \'${1:version}\';\n\teval $VERSION;\n\t## use critic\n# new \'switch\' like feature\nsnippet switch\n\tuse feature \'switch\';\n\n# Anonymous subroutine\nsnippet asub\n\tsub {\n\t \t${1:# body }\n\t}\n\n\n\n# Begin block\nsnippet begin\n\tBEGIN {\n\t\t${1:# begin body}\n\t}\n\n# call package function with some parameter\nsnippet pkgmv\n\t__PACKAGE__->${1:package_method}(${2:var})\n\n# call package function without a parameter\nsnippet pkgm\n\t__PACKAGE__->${1:package_method}()\n\n# call package "get_" function without a parameter\nsnippet pkget\n\t__PACKAGE__->get_${1:package_method}()\n\n# call package function with a parameter\nsnippet pkgetv\n\t__PACKAGE__->get_${1:package_method}(${2:var})\n\n# complex regex\nsnippet qrx\n\tqr/\n\t     ${1:regex}\n\t/xms\n\n#simpler regex\nsnippet qr/\n\tqr/${1:regex}/x\n\n#given\nsnippet given\n\tgiven ($${1:var}) {\n\t\t${2:# cases}\n\t\t${3:# default}\n\t}\n\n# switch-like case\nsnippet when\n\twhen (${1:case}) {\n\t\t${2:# body}\n\t}\n\n# hash slice\nsnippet hslice\n\t@{ ${1:hash}  }{ ${2:array} }\n\n\n# map\nsnippet map\n\tmap {  ${2: body }    }  ${1: @array } ;\n\n\n\n# Pod stub\nsnippet ppod\n\t=head1 NAME\n\n\t${1:ClassName} - ${2:ShortDesc}\n\n\t=head1 SYNOPSIS\n\n\t  use $1;\n\n\t  ${3:# synopsis...}\n\n\t=head1 DESCRIPTION\n\n\t${4:# longer description...}\n\n\n\t=head1 INTERFACE\n\n\n\t=head1 DEPENDENCIES\n\n\n\t=head1 SEE ALSO\n\n\n# Heading for a subroutine stub\nsnippet psub\n\t=head2 ${1:MethodName}\n\n\t${2:Summary....}\n\n# Heading for inline subroutine pod\nsnippet psubi\n\t=head2 ${1:MethodName}\n\n\t${2:Summary...}\n\n\n\t=cut\n# inline documented subroutine\nsnippet subpod\n\t=head2 $1\n\n\tSummary of $1\n\n\t=cut\n\n\tsub ${1:subroutine_name} {\n\t\t${2:# body...}\n\t}\n# Subroutine signature\nsnippet parg\n\t=over 2\n\n\t=item\n\tArguments\n\n\n\t=over 3\n\n\t=item\n\tC<${1:DataStructure}>\n\n\t  ${2:Sample}\n\n\n\t=back\n\n\n\t=item\n\tReturn\n\n\t=over 3\n\n\n\t=item\n\tC<${3:...return data}>\n\n\n\t=back\n\n\n\t=back\n\n\n\n# Moose has\nsnippet has\n\thas ${1:attribute} => (\n\t\tis\t    => \'${2:ro|rw}\',\n\t\tisa \t=> \'${3:Str|Int|HashRef|ArrayRef|etc}\',\n\t\tdefault => sub {\n\t\t\t${4:defaultvalue}\n\t\t},\n\t\t${5:# other attributes}\n\t);\n\n\n# override\nsnippet override\n\toverride ${1:attribute} => sub {\n\t\t${2:# my $self = shift;};\n\t\t${3:# my ($self, $args) = @_;};\n\t};\n\n\n# use test classes\nsnippet tuse\n\tuse Test::More;\n\tuse Test::Deep; # (); # uncomment to stop prototype errors\n\tuse Test::Exception;\n\n# local test lib\nsnippet tlib\n\tuse lib qw{ ./t/lib };\n\n#test methods\nsnippet tmeths\n\t$ENV{TEST_METHOD} = \'${1:regex}\';\n\n# runtestclass\nsnippet trunner\n\tuse ${1:test_class};\n\t$1->runtests();\n\n# Test::Class-style test\nsnippet tsub\n\tsub t${1:number}_${2:test_case} :Test(${3:num_of_tests}) {\n\t\tmy $self = shift;\n\t\t${4:#  body}\n\n\t}\n\n# Test::Routine-style test\nsnippet trsub\n\ttest ${1:test_name} => { description => \'${2:Description of test.}\'} => sub {\n\t\tmy ($self) = @_;\n\t\t${3:# test code}\n\t};\n\n#prep test method\nsnippet tprep\n\tsub prep${1:number}_${2:test_case} :Test(startup) {\n\t\tmy $self = shift;\n\t\t${4:#  body}\n\t}\n\n# cause failures to print stack trace\nsnippet debug_trace\n\tuse Carp; # \'verbose\';\n\t# cloak "die"\n\t# warn "warning"\n\t$SIG{\'__DIE__\'} = sub {\n\t\trequire Carp; Carp::confess\n\t};\n\n';
	exports.scope = "perl";
});